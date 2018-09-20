import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root'
  })
export class CartService {

  private newCartSubject = new BehaviorSubject<string>(0);
  currentCart = this.newCartSubject.asObservable();

  constructor() { }


  addProp(item: number) {
    this.newCartSubject.next(item);
  }

}