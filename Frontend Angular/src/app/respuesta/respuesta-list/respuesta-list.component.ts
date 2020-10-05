import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';
import { Respuesta } from '../../../entities/respuesta';
import { RespuestaServiceService } from '../../../services/respuesta-service.service';

@Component({
  selector: 'app-respuesta-list',
  templateUrl: './respuesta-list.component.html',
  styleUrls: ['./respuesta-list.component.css']
})
export class RespuestaListComponent implements OnInit {


  respuestas: Respuesta[] = [];
  respuestaRating: Respuesta;

  ratingMas: number = 1;
  ratingMenos: number = -1;

  private sub: any;
  idForo: number = 0;
  idTema: number = 0;
  idComentario: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private comentarioService: ComentarioServiceService, private respuestaService: RespuestaServiceService) { }

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

  masRating( idRespuesta: number){
    
    this.respuestaService.findById(idRespuesta).subscribe(
      results => {
        console.log(results);
        this.respuestaRating = results;
        this.ratingMas = this.respuestaRating.rating + this.ratingMas;
        console.log("El ratinggg maaassss esss "+this.ratingMas);
        this.respuestaRating.rating = this.ratingMas;
        this.respuestaService.updateRating(this.respuestaRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }

  menosRating( idRespuesta: number){
    
    this.respuestaService.findById(idRespuesta).subscribe(
      results => {
        console.log(results);
        this.respuestaRating = results;
        this.ratingMenos = this.respuestaRating.rating + this.ratingMenos;
        console.log("El ratinggg maaassss esss "+this.ratingMenos);
        this.respuestaRating.rating = this.ratingMenos;
        this.respuestaService.updateRating(this.respuestaRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }

  organizarLista(respuesta: Respuesta[]){
    respuesta.sort(function (a, b){
      return (a.rating - b.rating)
  });
  }

  findRespuestas() {

    this.comentarioService.findAllRespuestas(this.idComentario).subscribe(
      results => {
        console.log(results);
        this.respuestas = results;
        this.organizarLista(this.respuestas);
      },
      error => console.error(error)
    );
  }

}
