import { Component, OnInit } from '@angular/core';
import { TemaServiceService } from '../../../services/tema-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Comentario } from '../../../entities/comentario';

@Component({
  selector: 'app-comentario-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {


  comentarios: Comentario[] = [];


  private sub: any;
  idForo: number = 0;
  idTema: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService) { }

  ngOnInit(): void {
    
    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema']; // Importante el '+' para obtener números
    });
    console.log(this.idTema+" id tema");

    this.findComentarios();
  }

  findComentarios() {

    this.temaService.findAllComentarios(this.idTema).subscribe(
      results => {
        console.log(results);
        this.comentarios = results;
      },
      error => console.error(error)
    );
  }

}
