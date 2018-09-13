import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

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
    private productService: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    //if we only need inital value of activated route, we use snapshot- otherwise
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

}
