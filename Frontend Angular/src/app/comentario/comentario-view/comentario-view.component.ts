import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';
import { Tema } from '../../../entities/tema';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';

@Component({
  selector: 'app-comentario-view',
  templateUrl: './comentario-view.component.html',
  styleUrls: ['./comentario-view.component.css']
})
export class ComentarioViewComponent implements OnInit {


  @ViewChild('createForm', { static: true })
  createForm;

  comentario: Comentario = new Comentario(
    undefined,
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
  idComentario: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, private comentarioService: ComentarioServiceService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema'];
      this.idComentario = +params['idComen'];
       // Importante el '+' para obtener números
    });

    this.buscarComentario();
  }

  buscarComentario(){
    this.comentarioService.findById(this.idComentario).subscribe(
      results => {
        this.comentario = results;
      }
    );
  }

  editarComentario(){
    
    this.comentarioService.update(this.comentario).subscribe(
      results2 => {
        this.router.navigate(['/temas/', this.idForo, 'comentarios', this.idTema]);
      }
    );

  }

  cancel() {
    this.router.navigate(['/temas',this.idForo,'comentarios',this.idTema]);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }


}
