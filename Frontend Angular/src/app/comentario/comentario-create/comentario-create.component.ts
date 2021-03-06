import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';
import { Tema } from '../../../entities/tema';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Foro } from 'src/entities/foro';


@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {



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

 tema: Tema;

 foro: Foro;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, private comentarioService: ComentarioServiceService, private foroService: ForoServiceService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema']; // Importante el '+' para obtener números
    });
    console.log(this.idTema+" id tema 2");
  }


  create() {
    this.comentario.moderado = true;
    this.comentario.rating = 0;
    this.comentario.fecha = new Date().toLocaleString();
    this.temaService.findById(this.idTema).subscribe(
      result1 =>{
        this.tema = result1;
        this.comentario.temaComentario = this.tema;
        this.foroService.findById(this.idForo).subscribe(
          results2 => {
            this.foro = results2;
            if (this.foro.moderado == true){
              this.comentario.moderado = false;
            }
            this.submitted = true;
            this.comentarioService.create(this.comentario).subscribe(
              result => {
                console.log(result);
                this.router.navigate(['/temas/', this.idForo, 'comentarios', this.idTema]);
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
    );
    
  }

  cancel() {
    this.router.navigate(['/temas',this.idForo,'comentarios',this.idTema]);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }

}
