var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';
var ProductService = /** @class */ (function () {
    //remember to add assets to angular.json if our source is a local file
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'api/products/products.json';
    }
    //injecting dependancy of HttpClient service
    ProductService.prototype.getProducts = function () {
        //return type is observable of IProduct array
        return this.http.get(this.productUrl).pipe(
        //get method will send a request for data; 
        //adding a generic parameter will map the response to array of products
        //we use pipe method of observable and provide operators tap and catchError
        tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts().pipe(map(function (products) { return products.find(function (p) { return p.productId === id; }); }));
    };
    ProductService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}());
export { ProductService };
//# sourceMappingURL=product.service.js.map