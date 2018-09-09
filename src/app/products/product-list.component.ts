import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Choose your prop!';
    showImage: boolean = false;
    //initial state of showImage- if its false, images are hidden;
    errorMessage = '';
    
    _listFilter: string;
    //value for the method for two way binding  (string typed by user will appear)
    get listFilter(): string {
        return this._listFilter;
    }
    //if app need _listFilter, gets it from here
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
    }
    //method takes parameter- <input type='text' [(ngModel)]='listFilter' /> and sets 
    //our vriable to typed string; it also sets filteredProducts to 
    //this.performFilter(value) and kicks performFilter method; if there is no value,
    //filteredProducts is products


    filteredProducts: IProduct[];
    products: IProduct[] = [];
//set variables filtered products and products which is empty array
    
    constructor(private productService: ProductService) {
      }
    //dependency injection of service

    onRatingClicked(message: string): void {
      this.pageTitle = message
    }
//message is emmited from star.component which is nested component; 
//method listens to event by event binding (ratingClicked)='onRatingClicked($event)';

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
//initial state of showImage is false; when clicked, sets it to true with *ngIf='showImage'

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