import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForoCreateComponent } from './foro/foro-create/foro-create.component';
import { ForoListComponent } from './foro/foro-list/foro-list.component';
import { TemaListComponent } from './tema/tema-list/tema-list.component';
import { TemaCreateComponent } from './tema/tema-create/tema-create.component';
import { ComentarioListComponent } from './comentario/comentario-list/comentario-list.component';
import { ComentarioCreateComponent } from './comentario/comentario-create/comentario-create.component';
import { RespuestaListComponent } from './respuesta/respuesta-list/respuesta-list.component';
import { RespuestaCreateComponent } from './respuesta/respuesta-create/respuesta-create.component';
import { TemaViewComponent } from './tema/tema-view/tema-view.component';
import { ComentarioViewComponent } from './comentario/comentario-view/comentario-view.component';
import { RespuestaViewComponent } from './respuesta/respuesta-view/respuesta-view.component';
import { AuthServiceService } from '../services/auth-service.service';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent},
{ path: 'foros', component: ForoListComponent, canActivate: [AuthServiceService] },
{ path: 'foros/create', component: ForoCreateComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo', component: TemaListComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/create', component: TemaCreateComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/edit/:idtema', component: TemaViewComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema', component: ComentarioListComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema/create', component: ComentarioCreateComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema/edit/:idComen', component: ComentarioViewComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen', component: RespuestaListComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen/create', component: RespuestaCreateComponent, canActivate: [AuthServiceService]},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen/edit/:idres', component: RespuestaViewComponent, canActivate: [AuthServiceService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
