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
export class RespuestaServiceService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private getRespuesta<T>(url): Observable<T> {
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

  private postRespuesta<T>(url, data: T): Observable<T> {
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
  private putRespuesta<T>(url, data: T): Observable<T> {
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
    const url = `${environment.baseUrl}/respuestas/${id}`;
    return this.getRespuesta<Respuesta>(url);
    
  }

  findAll() {
    const url = `${environment.baseUrl}/respuestas`;
    return this.getRespuesta<Respuesta[]>(url);
  }

  update(respuesta: Respuesta) {
    const url = `${environment.baseUrl}/respuestas/${respuesta.id}`;
    return this.putRespuesta(url, {

      fecha: respuesta.fecha,
      contenido: respuesta.contenido,
      rating: respuesta.rating

    });
  }
  create(respuesta: Respuesta) {
    const url = `${environment.baseUrl}/respuestas`;
    console.log('impresionnnn servicioooo'+respuesta.comentarioRespuesta.id);
    return this.postRespuesta(url, {
      fecha: respuesta.fecha,
      contenido: respuesta.contenido,
      rating: respuesta.rating,
      comentario: respuesta.comentarioRespuesta,
      tipoUsuario: sessionStorage.getItem('usuario')

    });
  }
}
