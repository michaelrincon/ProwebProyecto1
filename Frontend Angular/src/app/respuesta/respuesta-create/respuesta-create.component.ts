import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';
import { Tema } from '../../../entities/tema';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';
import { Respuesta } from '../../../entities/respuesta';
import { RespuestaServiceService } from '../../../services/respuesta-service.service';


@Component({
  selector: 'app-respuesta-create',
  templateUrl: './respuesta-create.component.html',
  styleUrls: ['./respuesta-create.component.css']
})
export class RespuestaCreateComponent implements OnInit {




  @ViewChild('createForm', { static: true })
  createForm;

  respuesta: Respuesta = new Respuesta(
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

 comentario: Comentario;

  constructor(private route: ActivatedRoute, private router: Router, private comentarioService: ComentarioServiceService, private respuestaService: RespuestaServiceService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema'];
      this.idComentario = +params['idComen']; // Importante el '+' para obtener números
    });
    console.log(this.idComentario+" id comen 2");
  }

  create() {
    this.respuesta.rating = 0;
    this.respuesta.fecha = new Date().toLocaleString();
    this.comentarioService.findById(this.idComentario).subscribe(
      result1 =>{
        this.comentario = result1;
        this.respuesta.comentarioRespuesta = this.comentario;
        this.submitted = true;
        console.log("aquiii resultado 1"+this.respuesta.comentarioRespuesta);
        this.respuestaService.create(this.respuesta).subscribe(
          result => {
            console.log(result);
            this.router.navigate(['/temas/', this.idForo, 'comentarios', this.idTema, 'respuestas', this.idComentario]);
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

