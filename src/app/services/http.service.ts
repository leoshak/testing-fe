import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  authenticate(url: string, payload: any, headers?: any) : Observable<any> {
    return this.httpClient.post(url, payload, headers);//.pipe(catchError(this.handleError));
  }

  logout(url: string, payload: any, headers?: any) {
    return this.httpClient.post(url, payload, headers);
  }

  register(url: string, payload: any, headers?: any) : Observable<any> {
    return this.httpClient.post(url, payload, headers).pipe(catchError(this.handleError));
  }

  getAllBook(url: string, headers?: any) : Observable<any> {
    return this.httpClient.get(url, headers).pipe(catchError(this.handleError));
  }

  getBook(url: string) : Observable<Book> {
    return this.httpClient.get<Book>(url).pipe(catchError(this.handleError));
  }

  saveBook(url: string, payload: any, headers?: any) : Observable<any> {
    return this.httpClient.post(url, payload, headers).pipe(catchError(this.handleError));
  }

  updateBook(url: string, payload: any, headers?: any) : Observable<any> {
    return this.httpClient.put(url, payload, headers).pipe(catchError(this.handleError));
  }

  deleteBook(url: string, headers?: any) : Observable<any> {
    return this.httpClient.delete(url, headers).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
