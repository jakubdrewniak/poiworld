import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product list';
    showImage: boolean = false;
    errorMessage = '';
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
    }


    filteredProducts: IProduct[];
    products: IProduct[] = [];
    
    constructor(private productService: ProductService) {
      }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product list ' + message
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {this.productService.getProducts().subscribe(
      //calls getProducts method from service and kicks off get request
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      //we could not use curly brackets if it wasnt two line code; 
      //at first we get products and then we set filteredProducts to products
      error => this.errorMessage = <any>error
      //<any> is casting operator; its casting error form observable
    );
    }
}