import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError, Observable, } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Foro } from '../entities/foro';
import {
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForoServiceService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private getForo<T>(url): Observable<T> {
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

  private postForo<T>(url, data: T): Observable<T> {
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
  private putForo<T>(url, data: T): Observable<T> {
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
    const url = `${environment.baseUrl}/foros/${id}`;
    return this.getForo<Foro>(url);
    
  }

  findAll() {
    const url = `${environment.baseUrl}/foros`;
    return this.getForo<Foro[]>(url);
  }

  update(foro: Foro) {
    const url = `${environment.baseUrl}/foros/${foro.id}`;
    return this.putForo(url, {
      moderado: foro.moderado,
      nombre: foro.nombre
    });
  }
  create(foro: Foro) {
    const url = `${environment.baseUrl}/foros`;
    return this.postForo(url, {
      moderado: foro.moderado,
      nombre: foro.nombre
    });
  }

}
