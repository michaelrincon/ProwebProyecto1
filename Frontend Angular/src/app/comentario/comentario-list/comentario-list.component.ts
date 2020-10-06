import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';
import { LoginServicesService } from 'src/services/login-services.service';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {


  comentarios: Comentario[] = [];
  comentarioRating: Comentario;

  ratingMas: number = 1;
  ratingMenos: number = -1;


  private sub: any;
  idForo: number = 0;
  idTema: number = 0;
  tipoUsuario: string = sessionStorage.getItem('usuario');
  validacionOcultar: boolean;
  usuario: boolean;


  constructor(private loginService: LoginServicesService, private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, private comentarioServices: ComentarioServiceService) { }

  ngOnInit(): void {
    
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema']; // Importante el '+' para obtener números
    });
    console.log(this.idTema+" id tema");

    this.findComentarios();

    if(sessionStorage.getItem('usuario') == 'usuario'){
      this.validacionOcultar = true;
    }
    else{
      this.validacionOcultar = false;
    }
  }

  masRating( idComentario: number){
    
    this.comentarioServices.findById(idComentario).subscribe(
      results => {
        console.log(results);
        this.comentarioRating = results;
        this.ratingMas = this.comentarioRating.rating + this.ratingMas;
        console.log("El ratinggg maaassss esss "+this.ratingMas);
        this.comentarioRating.rating = this.ratingMas;
        this.comentarioServices.updateRating(this.comentarioRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }
  
  menosRating(idComentario: number){
    
    this.comentarioServices.findById(idComentario).subscribe(
      results => {
        console.log(results);
        this.comentarioRating = results;
        this.ratingMenos = this.comentarioRating.rating + this.ratingMenos;
        console.log("El ratinggg maaassss esss "+this.ratingMenos);
        this.comentarioRating.rating = this.ratingMenos;
        this.comentarioServices.updateRating(this.comentarioRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }

  organizarLista(comentario: Comentario[]){
    comentario.sort(function (a, b){
      return (b.rating - a.rating)
  });
  }

  findComentarios() {

    this.temaService.findAllComentarios(this.idTema).subscribe(
      results => {
        console.log(results);
        this.comentarios = results;
        this.organizarLista(this.comentarios);
      },
      error => console.error(error)
    );
  }
  
  eliminar(idcomentario: number){
    this.comentarioServices.delete(idcomentario).subscribe(
      results => {
        window.location.reload();
      }
    );
  }

  aceptarModerado(idComentario: number){

    this.comentarioServices.findById(idComentario).subscribe(
      results => {
        this.comentarioRating = results;
        this.comentarioRating.moderado = true;
        this.comentarioServices.updateModerado(this.comentarioRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }

  logout() {
    this.loginService.logout().subscribe(data => {
      this.router.navigate(['/']);
      sessionStorage.clear();
      }, error => {
        console.error(error);
      });
  }

}
