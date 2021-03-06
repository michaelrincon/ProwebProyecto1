import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Tema } from '../../../entities/tema';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';
import { LoginServicesService } from '../../../services/login-services.service';

@Component({
  selector: 'app-tema-list',
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css']
})
export class TemaListComponent implements OnInit {

  temas: Tema[] = [];
  temaRating: Tema;

  ratingMas: number = 1;
  ratingMenos: number = -1;
  private sub: any;
 idForo: number = 0;
 tipoUsuario: string = sessionStorage.getItem('usuario');
 validacionOcultar: boolean;
 usuario: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService,
    private foroService: ForoServiceService, private loginService: LoginServicesService) { }

  ngOnInit(): void {

    
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo']; // Importante el '+' para obtener números
    });
    console.log(this.idForo+" id foro");
    

    this.findTemas();
    if(sessionStorage.getItem('usuario') == 'usuario'){
      this.validacionOcultar = true;
    }
    else{
      this.validacionOcultar = false;
    }

  }

  organizarLista(tema: Tema[]){
    tema.sort(function (a, b){
      return (b.rating - a.rating)
  });
  }

  masRating( idTema: number){
    
    console.log(idTema+"id a buscar en mas");
    this.temaService.findById(idTema).subscribe(
      results => {
        console.log(results);
        this.temaRating = results;
        this.ratingMas = this.temaRating.rating + this.ratingMas;
        console.log("El ratinggg maaassss esss "+this.ratingMas);
        this.temaRating.rating = this.ratingMas;
        this.temaService.updateRating(this.temaRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }
  
  menosRating(idTema: number){
    this.temaService.findById(idTema).subscribe(
      results => {
        console.log(results);
        this.temaRating = results;
        this.ratingMenos = this.temaRating.rating + this.ratingMenos;
        console.log("El ratinggg menosssss esss "+this.ratingMenos);
        this.temaRating.rating = this.ratingMenos;
        this.temaService.updateRating(this.temaRating).subscribe(
          results2 =>{
            window.location.reload();
          }
        );
      },
      error => console.error(error)
    );
  }

  findTemas() {

    this.foroService.findAllTemas(this.idForo).subscribe(
      results => {
        console.log(results);
        this.temas = results;
        this.organizarLista(this.temas);
      },
      error => console.error(error)
    );
  }

  eliminar(idTema: number){
    this.temaService.delete(idTema).subscribe(
      results => {
        window.location.reload();
      }
    );
  }

  aceptarModerado(idTema: number){

    this.temaService.findById(idTema).subscribe(
      results => {
        this.temaRating = results;
        this.temaRating.moderado = true;
        this.temaService.updateModerado(this.temaRating).subscribe(
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
