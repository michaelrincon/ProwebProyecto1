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

  
  findTemas() {

    this.foroService.findAllTemas(this.idForo).subscribe(
      results => {
        console.log(results);
        this.temas = results;
      },
      error => console.error(error)
    );
  }
}
