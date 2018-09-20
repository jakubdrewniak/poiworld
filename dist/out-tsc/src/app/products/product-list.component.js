var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ProductService } from './product.service';
var ProductListComponent = /** @class */ (function () {
    //set variables filtered products and products which is empty array
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Choose your prop!';
        this.showImage = false;
        //initial state of showImage- if its false, images are hidden;
        this.errorMessage = '';
        this.products = [];
    }
    Object.defineProperty(ProductListComponent.prototype, "listFilter", {
        //value for the method for two way binding  (string typed by user will appear)
        get: function () {
            return this._listFilter;
        },
        //if app need _listFilter, gets it from here
        set: function (value) {
            this._listFilter = value;
            this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
        },
        enumerable: true,
        configurable: true
    });
    //dependency injection of service
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = message;
    };
    //message is emmited from star.component which is nested component; 
    //method listens to event by event binding (ratingClicked)='onRatingClicked($event)';
    ProductListComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    //initial state of showImage is false; when clicked, sets it to true with *ngIf='showImage'
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(
        //calls getProducts method from service and kicks off get request
        function (products) {
            _this.products = products;
            _this.filteredProducts = _this.products;
        }, 
        //we could not use curly brackets if it wasnt two line code; 
        //at first we get products and then we set filteredProducts to products
        //remember to implement OnInit after class name
        function (error) { return _this.errorMessage = error; }
        //<any> is casting operator; its casting error form observable
        );
    };
    ProductListComponent = __decorate([
        Component({
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss']
        }),
        __metadata("design:paramtypes", [ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map