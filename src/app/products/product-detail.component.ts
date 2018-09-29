import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    //to get parameter FROM url to retreieve proper product we inject dependancy
    //of the service ActicatedRoute
    private router: Router,
    private productService: ProductService,
    public cartService: CartService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    //if we only need inital value of activated route, we use snapshot
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  
  toCart(data) {
    if (isNaN(+Object.values(data))) {
      alert('Declare number of goods');
    } else {
    this.product['quantity'] = +Object.values(data);
    this.cartService.addProp(this.product);
    console.log(this.product)
    }
  }
    
}
