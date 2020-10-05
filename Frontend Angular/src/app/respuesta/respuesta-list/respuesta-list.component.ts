import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';
import { Respuesta } from '../../../entities/respuesta';

@Component({
  selector: 'app-respuesta-list',
  templateUrl: './respuesta-list.component.html',
  styleUrls: ['./respuesta-list.component.css']
})
export class RespuestaListComponent implements OnInit {


  respuestas: Respuesta[] = [];


  private sub: any;
  idForo: number = 0;
  idTema: number = 0;
  idComentario: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private comentarioService: ComentarioServiceService) { }

  ngOnInit(): void {
    
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema'];
      this.idComentario = +params['idComen'];
       // Importante el '+' para obtener números
    });
    console.log(this.idComentario+" id comen");

    this.findRespuestas();
  }

  findRespuestas() {

    this.comentarioService.findAllRespuestas(this.idComentario).subscribe(
      results => {
        console.log(results);
        this.respuestas = results;
      },
      error => console.error(error)
    );
  }

}
