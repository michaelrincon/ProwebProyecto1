import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Tema } from '../../../entities/tema';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService,
    private foroService: ForoServiceService) { }

  ngOnInit(): void {

    
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo']; // Importante el '+' para obtener números
    });
    console.log(this.idForo+" id foro");
    

    this.findTemas();
  }

  organizarLista(tema: Tema[]){
    tema.sort(function (a, b){
      return (a.rating - b.rating)
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
    console.log(idTema+"id a buscar en menos");

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
}
