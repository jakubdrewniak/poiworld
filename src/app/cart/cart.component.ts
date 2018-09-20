import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  item: number;
  

  public pageTitle = 'Your props';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    if (this.item >= 1) {
      this.cartService.currentCart.subscribe(
        item => this.item += item   
      );
    } else {
      this.cartService.currentCart.subscribe(
        item => this.item = item   
      );
    };
  
    console.log(this.item)
  }

}
