import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  order: object = [];

  public pageTitle = 'Your props';
  public cartMessage = 'Your cart is empty. Go to Products section and get some stuff'

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() { 
      this.cartService.addProp({});  
      this.cartService.currentCart.subscribe(
        item => this.order = item   
      );
      if (this.order.length > 0) {this.cartMessage = 'Your order'}       
    console.log(this.order);
  }

 

  removeItem(Id): void {
    console.log('id of clicked item ' + Id);
    this.cartService.removeCartItem(Id);
  }
}
