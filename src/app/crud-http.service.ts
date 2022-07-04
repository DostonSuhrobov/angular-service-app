import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {

  apiUrl: string = 'http://localhost:3000/todos';
  headers = new HttpHeaders().set('Content-type', 'applicaiton/json');

  constructor(private http: HttpClient) { }

  // create 
  create(data: any): Observable<any>{
        let API_URL = `${this.apiUrl}`;
        return this.http.post(API_URL,data)
          .pipe(
            catchError(this.handleError)
          )
  }


  // handle API error 
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An Error occured : ' + error.error.message)
    }
    else {
      console.error(`Backend error with ${error.status}, body was : ${error.error}`)
    }
    return throwError('Something bad happened !');
  }

  
}
