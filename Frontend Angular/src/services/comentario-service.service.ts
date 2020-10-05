import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError, Observable, } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {HttpHeaders} from "@angular/common/http";
import { Comentario } from '../entities/comentario';
import { Respuesta } from '../entities/respuesta';

@Injectable({
  providedIn: 'root'
})
export class ComentarioServiceService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private getComentario<T>(url): Observable<T> {
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

  private postComentario<T>(url, data: T): Observable<T> {
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
  private putComentario<T>(url, data: T): Observable<T> {
    console.log("put:", url);
    return this.http.put<T>(url, data, {
      withCredentials: true
    }).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findById(
    id: number // : Observable<Employee>
) {
    const url = `${environment.baseUrl}/comentarios/${id}`;
    return this.getComentario<Comentario>(url);
    
  }

  findAll() {
    const url = `${environment.baseUrl}/comentarios`;
    return this.getComentario<Comentario[]>(url);
  }

  findAllRespuestas(id: number) {
    const url = `${environment.baseUrl}/comentarios/${id}/respuestas`;
    return this.getComentario<Respuesta[]>(url);
  }

  update(comentario: Comentario) {
    const url = `${environment.baseUrl}/comentarios/${comentario.id}`;
    return this.putComentario(url, {

      fecha: comentario.fecha,
      contenido: comentario.contenido,
      rating: comentario.rating

    });
  }
  create(comentario: Comentario) {
    const url = `${environment.baseUrl}/comentarios`;
    return this.postComentario(url, {
      fecha: comentario.fecha,
      contenido: comentario.contenido,
      rating: comentario.rating,
      comentarioTema: comentario.temaComentario,
      tipoUsuario: sessionStorage.getItem('usuario')

    });
  }
}
