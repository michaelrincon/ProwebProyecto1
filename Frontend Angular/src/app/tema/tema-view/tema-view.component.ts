import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from 'src/services/foro-service.service';
import { TemaServiceService } from 'src/services/tema-service.service';
import { Tema } from '../../../entities/tema';

@Component({
  selector: 'app-tema-view',
  templateUrl: './tema-view.component.html',
  styleUrls: ['./tema-view.component.css']
})
export class TemaViewComponent implements OnInit {

  @ViewChild('createForm', { static: true })
  createForm;

  tema: Tema = new Tema(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  submitted = false;
  errorMessage = '';

  private sub: any;
 idForo: number = 0;
 idTema: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, 
    private foroService: ForoServiceService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema']; // Importante el '+' para obtener números
    });
    this.buscarTema();

  }

  buscarTema(){
    this.temaService.findById(this.idTema).subscribe(
      results => {
        this.tema = results;
      }
    );
  }

  editarTema(){
    
    this.temaService.update(this.tema).subscribe(
      results2 => {
        this.router.navigate(['/temas/', this.idForo]);
      }
    );

  }


  cancel() {
    this.router.navigate(['/temas']);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }

}
