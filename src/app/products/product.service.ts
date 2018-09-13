import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
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
      //its not necessary, we can delete whole pipe segment      
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }
}