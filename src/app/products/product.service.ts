import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  //remember to add assets to angular.json if our source is a local file

  constructor(private http: HttpClient) { }
  //injecting dependancy of HttpClient service

  getProducts(): Observable<IProduct[]> {
    //return type is observable of IProduct array
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      //get method will send a request for data; 
      //adding a generic parameter will map the response to array of products
      //we use pipe method of observable and provide operators tap and catchError
      tap(data => console.log('All: ' + JSON.stringify(data))),
      //tap allows to look at emitted values withour transforming it (debugging)
      catchError(this.handleError)      
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}