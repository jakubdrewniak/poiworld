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
    let order = this.getOrder();
    order.push(item);
    this.newCartSubject.next(order);
    this.setLocalStorageOrder(order);
    
  }

  public getOrder() {
    let localStorageItem = JSON.parse(localStorage.getItem('mycart'));
    return localStorageItem == null ? [] : localStorageItem.order;
  }

  private setLocalStorageOrder (order) {
    localStorage.setItem('mycart', JSON.stringify({order}))
  }

}