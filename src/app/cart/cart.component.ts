import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  order;
  sum: number = 0; 

  public pageTitle = 'Your props';
  public cartMessage = 'Your cart is empty. Go to Products section and get some stuff'

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() { 
      this.cartService.addProp({});
      //this line kicks addProp method- without it we need to put something to cart
      //to kick the method  
      this.cartService.currentCart.subscribe(
        item => this.order = item   
      );
      for (let i=0; i < this.order.length; i++) {
        this.sum += this.order[i]['price'] * this.order[i]['quantity']
      };
      if (this.order.length > 0) {this.cartMessage = 'Your order'};
    console.log(this.order.length);
  }

 

  removeItem(Id): void {
    console.log('id of clicked item ' + Id);
    this.cartService.removeCartItem(Id);
  }
}
