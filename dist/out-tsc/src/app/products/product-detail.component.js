var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { NgForm } from '@angular/forms';
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, 
    //to get parameter FROM url to retreieve proper product we inject dependancy
    //of the service ActicatedRoute
    router, productService, cartService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.cartService = cartService;
        this.pageTitle = 'Product Detail';
        this.errorMessage = '';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var param = this.route.snapshot.paramMap.get('id');
        //if we only need inital value of activated route, we use snapshot- otherwise
        if (param) {
            var id = +param;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.toCart = function (data) {
        this.cartService.addProp(data);
        console.log(+Object.values(data));
    };
    __decorate([
        ViewChild('newCartForm'),
        __metadata("design:type", NgForm)
    ], ProductDetailComponent.prototype, "newCartForm", void 0);
    ProductDetailComponent = __decorate([
        Component({
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ProductService,
            CartService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
export { ProductDetailComponent };
//# sourceMappingURL=product-detail.component.js.map