import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';
import { Tema } from '../../../entities/tema';
import { TemaServiceService } from '../../../services/tema-service.service';
import { Comentario } from '../../../entities/comentario';
import { ComentarioServiceService } from '../../../services/comentario-service.service';


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
    undefined
  );

  submitted = false;
  errorMessage = '';

  private sub: any;
 idForo: number = 0;
 idTema: number = 0;

 tema: Tema;

  constructor(private route: ActivatedRoute, private router: Router, private temaService: TemaServiceService, private comentarioService: ComentarioServiceService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.idForo = +params['idforo'];
      this.idTema = +params['idtema']; // Importante el '+' para obtener números
    });
    console.log(this.idTema+" id tema 2");
  }

  create() {
    this.temaService.findById(this.idTema).subscribe(
      result1 =>{
        this.tema = result1;
        this.comentario.temaComentario = this.tema;
        this.submitted = true;
        console.log(this.comentario);
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


  cancel() {
    this.router.navigate(['/temas']);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }

}
