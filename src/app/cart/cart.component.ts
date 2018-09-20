import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  message: string;
  

  public pageTitle = 'Your props';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.currentMessage.subscribe(
      message => this.message = message   
    )
    
  }

}
