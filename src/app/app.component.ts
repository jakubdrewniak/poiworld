import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'poiworld';
  Notifier: number = 0;
  order;

  constructor (public service: CartService ) { 
    this.service.notifier.subscribe((notifier: number) => { this.Notifier = notifier; });
  }
  
  ngDoCheck () {
    this.service.addProp({}); 
      this.service.currentCart.subscribe(
        item => this.order = item   
      );
      this.Notifier = 0;
      for (let i=0; i < this.order.length; i++) {
        this.Notifier += +this.order[i]['quantity']
      };
    console.log(this.Notifier)
  }
}
