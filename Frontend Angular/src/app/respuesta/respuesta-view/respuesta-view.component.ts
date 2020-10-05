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
  selector: 'app-respuesta-view',
  templateUrl: './respuesta-view.component.html',
  styleUrls: ['./respuesta-view.component.css']
})
export class RespuestaViewComponent implements OnInit {


  @ViewChild('createForm', { static: true })
  createForm;

  respuesta: Respuesta = new Respuesta(
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
 idRespuesta: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private comentarioService: ComentarioServiceService, private respuestaService: RespuestaServiceService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema'];
      this.idComentario = +params['idComen'];
      this.idRespuesta = +params['idres'];// Importante el '+' para obtener números
    });

    this.buscarRespuesta();
  }

  buscarRespuesta(){
    this.respuestaService.findById(this.idRespuesta).subscribe(
      results => {
        this.respuesta = results;
      }
    );
  }

  editarRespuesta(){
    
    this.respuestaService.update(this.respuesta).subscribe(
      results2 => {
        this.router.navigate(['/temas', this.idForo,'comentarios',this.idTema,'respuestas',this.idComentario]);
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
