import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError, Observable, } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Tema } from 'src/entities/tema';
import { HttpHeaders } from "@angular/common/http";
import { Comentario } from '../entities/comentario';

@Injectable({
  providedIn: 'root'
})
export class TemaServiceService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private getTema<T>(url): Observable<T> {
    console.log("get:", url);
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
        }),
        withCredentials: true
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private postTema<T>(url, data: T): Observable<T> {
    console.log("post:", url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        }),
        withCredentials: true
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private putTema<T>(url, data: T): Observable<T> {
    console.log("put:", url);
    return this.http.put<T>(url, data, {
      withCredentials: true
    }).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  private deleteTema<T>(url): Observable<T> {
    console.log("delete:", url);
    return this.http
      .delete<T>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
        }),
        withCredentials: true
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  findById(
    id: number // : Observable<Employee>
) {
    const url = `${environment.baseUrl}/temas/${id}`;
    return this.getTema<Tema>(url);
    
  }

  findAll() {
    const url = `${environment.baseUrl}/temas`;
    return this.getTema<Tema[]>(url);
  }

  findAllComentarios(id: number) {
    const url = `${environment.baseUrl}/temas/${id}/comentarios`;
    return this.getTema<Comentario[]>(url);
  }

  update(tema: Tema) {
    const url = `${environment.baseUrl}/temas/${tema.id}`;
    return this.putTema(url, {
      titulo: tema.titulo,
      contenido: tema.contenido,
    });
  }

  updateRating(tema:Tema){
    const url = `${environment.baseUrl}/temas/${tema.id}/rating`;
    
    return this.putTema(url, {
      rating: tema.rating
    });
  }

  updateModerado(tema:Tema){
    const url = `${environment.baseUrl}/temas/${tema.id}/moderado`;
    
    return this.putTema(url, {
      moderado: tema.moderado
    });
  }

  create(tema: Tema) {
    const url = `${environment.baseUrl}/temas`;
    return this.postTema(url, {
      titulo: tema.titulo,
      fechaPublicacion: tema.fechaPublicacion,
      contenido: tema.contenido,
      rating: tema.rating,
      temaForo: tema.foroTema,
      tipoUsuario: sessionStorage.getItem('usuario'),
      moderado: tema.moderado
    });
  }

  delete(
    id: number // : Observable<Employee>
) {
    const url = `${environment.baseUrl}/temas/${id}`;
    return this.deleteTema<Tema>(url);
    
  }

}
