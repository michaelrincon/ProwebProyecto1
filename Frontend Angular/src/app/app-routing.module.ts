import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForoCreateComponent } from './foro/foro-create/foro-create.component';
import { ForoListComponent } from './foro/foro-list/foro-list.component';
import { TemaListComponent } from './tema/tema-list/tema-list.component';
import { TemaCreateComponent } from './tema/tema-create/tema-create.component';
import { ComentarioListComponent } from './comentario/comentario-list/comentario-list.component';
import { ComentarioCreateComponent } from './comentario/comentario-create/comentario-create.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'foros', component: ForoListComponent},
{ path: 'foros/create', component: ForoCreateComponent},
{ path: 'temas/:idforo', component: TemaListComponent},
{ path: 'temas/:idforo/create', component: TemaCreateComponent},
{ path: 'temas/:idforo/comentarios/:idtema', component: ComentarioListComponent},
{ path: 'temas/:idforo/comentarios/:idtema/create', component: ComentarioCreateComponent}];
//{ path: 'temas/:idforo/comentarios/:idtema/respuestas/:id', comp}];CAMBIAR TODAS LAS RUTAS 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
