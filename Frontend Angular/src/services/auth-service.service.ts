import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{

  constructor(public router: Router) { }

  canActivate(): boolean{
    if ((sessionStorage.getItem('usuario') !== 'usuario') && (sessionStorage.getItem('usuario') !== 'administrador') && (sessionStorage.getItem('usuario') !== 'moderador')){
      this.router.navigate(['/']);
      console.log("sessionnn aquiiiii "+ sessionStorage.getItem('usuario'));
      return false;
    }
    return true;
  }
}
