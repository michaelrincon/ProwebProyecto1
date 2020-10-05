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

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'foros', component: ForoListComponent},
{ path: 'foros/create', component: ForoCreateComponent},
{ path: 'temas/:idforo', component: TemaListComponent},
{ path: 'temas/:idforo/create', component: TemaCreateComponent},
{ path: 'temas/:idforo/edit/:idtema', component: TemaViewComponent},
{ path: 'temas/:idforo/comentarios/:idtema', component: ComentarioListComponent},
{ path: 'temas/:idforo/comentarios/:idtema/create', component: ComentarioCreateComponent},
{ path: 'temas/:idforo/comentarios/:idtema/edit/:idComen', component: ComentarioViewComponent},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen', component: RespuestaListComponent},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen/create', component: RespuestaCreateComponent},
{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:idComen/edit/:idres', component: RespuestaViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
