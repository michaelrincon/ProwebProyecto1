import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private loginService: LoginServicesService) { }


  user = '';
  password = '';


  ngOnInit(): void {
  }

  submit(): void {//REALIZAR VALIDACIONES CAMPOS COMO EN LA OTRA PAGINA
    console.log(this.user + ' - ' + this.password);
    this.loginService.login(this.user, this.password).subscribe(data => {
        this.router.navigate(['foros']);
      }, error => {
        console.error(error);
      });
  }


}
