import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  item: object = {};
  empty;

  public pageTitle = 'Your props';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {    
      this.cartService.currentCart.subscribe(
        item => this.item = item   
      );
      this.empty = (Object.keys(this.item).length === 0 && this.item.constructor === Object)         
    console.log(this.item)
  }

}
