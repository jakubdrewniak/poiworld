import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  order: object = {};
  empty;

  public pageTitle = 'Your props';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {    
      this.cartService.currentCart.subscribe(
        item => this.order = item   
      );
      this.empty = (Object.keys(this.order).length === 0 && this.order.constructor === Object)         
    console.log(this.order)
  }

}
