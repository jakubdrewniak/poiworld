import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
    providedIn: 'root'
  })
export class CartService {

  private newCartSubject = new BehaviorSubject<string>('some message');
  currentMessage = this.newCartSubject.asObservable();

  constructor() { }


  addProp(message: string) {
    this.newCartSubject.next(message);
  }

}