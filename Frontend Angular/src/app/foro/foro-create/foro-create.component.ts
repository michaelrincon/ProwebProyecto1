import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foro } from '../../../entities/foro';
import { ForoServiceService } from '../../../services/foro-service.service';
import { LoginServicesService } from '../../../services/login-services.service';

@Component({
  selector: 'app-foro-create',
  templateUrl: './foro-create.component.html',
  styleUrls: ['./foro-create.component.css']
})
export class ForoCreateComponent implements OnInit {

  @ViewChild('createForm', { static: true })
  createForm;

  foro: Foro = new Foro(
    undefined,
    undefined,
    undefined,
    undefined
  );

  submitted = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private foroService: ForoServiceService, 
    private loginService: LoginServicesService) { }

  ngOnInit(): void {
    this.foro.moderado = false;
  }

  create() {
    
    this.submitted = true;
    console.log(this.foro);
    this.foroService.create(this.foro).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/foros']);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
        this.submitted = false;
      }
    );
  }

  cancel() {
    this.router.navigate(['/foros']);
  }

  get canSubmit() {
    return this.createForm.form.valid && !this.submitted;
  }


  logout() {
    this.loginService.logout().subscribe(data => {
      }, error => {
        console.error(error);
      });
  }
}
