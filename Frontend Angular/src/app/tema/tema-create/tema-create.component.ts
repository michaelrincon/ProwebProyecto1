import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../../../entities/tema';
import { TemaServiceService } from '../../../services/tema-service.service';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Foro } from '../../../entities/foro';


@Component({
  selector: 'app-tema-create',
  templateUrl: './tema-create.component.html',
  styleUrls: ['./tema-create.component.css']
})
export class TemaCreateComponent implements OnInit {

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

 foro: Foro;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, 
    private foroService: ForoServiceService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo']; // Importante el '+' para obtener números
    });
    console.log(this.idForo+" id foro 2");
  }

  
  create() {
    this.tema.rating = 0;
    this.tema.fechaPublicacion = new Date().toLocaleString();
    this.foroService.findById(this.idForo).subscribe(
      result1 =>{
        this.foro = result1;
        this.tema.foroTema = this.foro;
        this.submitted = true;
        console.log(this.tema);
        this.temaService.create(this.tema).subscribe(
          result => {
            console.log(result);
            this.router.navigate(['/temas/', this.idForo]);
          },
          error => {
            console.error(error);
            this.errorMessage = error.toString();
            this.submitted = false;
          }
    );
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
