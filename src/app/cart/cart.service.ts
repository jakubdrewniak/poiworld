import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root'
  })
export class CartService {

  private newCartSubject = new BehaviorSubject<object>({});
  currentCart = this.newCartSubject.asObservable();

  constructor() {     
  }

  addProp(item: object) {
    let order = [];
    order.push(item);
    this.newCartSubject.next(order);
    
  }

}