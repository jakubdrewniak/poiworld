import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { isEmpty } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CartService {

  private newCartSubject = new BehaviorSubject<object>({});
  //this private variable holds data
  currentCart = this.newCartSubject.asObservable();
  //setting new subject as a obsevable, which is subscribed in cart.component

  notifier: Observable<number>;
  private notifySubject: Subject<number>;

  constructor() { 
    this.notifySubject = new Subject<number>();
    this.notifier = this.notifySubject.asObservable();    
  }

  addProp(item: object) {
    if (Object.keys(item).length === 0 && item.constructor === Object) {
      let order = this.getOrder();
      this.newCartSubject.next(order);
    } else {
    let order = this.getOrder();
    let alreadyOrderedItem = order.findIndex(i => i.productId === item['productId']);
    if (alreadyOrderedItem >= 0 ) {
      order[alreadyOrderedItem].quantity += item['quantity'];
    } else {
      order.push(item);
    }    
    
    this.setLocalStorageOrder(order);
    console.log('prop added')
   }
  }

  public getOrder() {
    let localStorageItem = JSON.parse(localStorage.getItem('mycart'));
    return localStorageItem == null ? [] : localStorageItem.order;
  }

  private setLocalStorageOrder (order) {
    localStorage.setItem('mycart', JSON.stringify({order}))
    this.newCartSubject.next(order);
    console.log('new order set');
    this.getNotifier();
 }

  removeCartItem(Id) {
    let order = this.getOrder();
    let removedItem = order.findIndex(i => i.productId === Id);
    console.log('index in array of deleted item ' + removedItem);
    order.splice(removedItem, 1);
    this.setLocalStorageOrder(order);    
  }

  getNotifier() {
    
  }

}