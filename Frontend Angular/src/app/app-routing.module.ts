import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForoCreateComponent } from './foro/foro-create/foro-create.component';
import { ForoListComponent } from './foro/foro-list/foro-list.component';
import { TemaListComponent } from './tema/tema-list/tema-list.component';
import { TemaCreateComponent } from './tema/tema-create/tema-create.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'foros', component: ForoListComponent},
{ path: 'foros/create', component: ForoCreateComponent},
{ path: 'temas/:id', component: TemaListComponent},
{ path: 'temas/:id/create', component: TemaCreateComponent}];//CAMBIAR TODAS LAS RUTAS 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
