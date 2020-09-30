import { Component, OnInit } from '@angular/core';
import { ForoServiceService } from '../../../services/foro-service.service';
import { Foro } from '../../../entities/foro';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServicesService } from '../../../services/login-services.service';

@Component({
  selector: 'app-foro-list',
  templateUrl: './foro-list.component.html',
  styleUrls: ['./foro-list.component.css']
})
export class ForoListComponent implements OnInit {

  foro: Foro[] = [];

  constructor(private route: ActivatedRoute, private router: Router, 
    private foroService: ForoServiceService, private loginService: LoginServicesService) { }

  ngOnInit(): void {
    this.findForos();
  }


  findForos() {
    this.foroService.findAll().subscribe(
      results => {
        console.log(results);
        this.foro = results;
      },
      error => console.error(error)
    );
  }

  logout() {
    this.loginService.logout().subscribe(data => {
      this.router.navigate(['/']);
      }, error => {
        console.error(error);
      });
  }
}
