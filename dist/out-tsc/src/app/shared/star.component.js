var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from "@angular/core";
var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new EventEmitter();
        //when item is clicked ( (click)="onClick()" in html ) sets the message and emits with emit method
    }
    //outup allows to pass data from nested component by making new instance of generic event
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = Math.floor(this.rating) * 15;
    };
    //every time data changes, onchanges recalculate width and sets it to [style.width.px]="starWidth"
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("Rating " + this.rating + " was clicked!");
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Component({
            selector: 'pm-star',
            templateUrl: './star.component.html',
            styleUrls: ['./star.component.scss']
        })
    ], StarComponent);
    return StarComponent;
}());
export { StarComponent };
//# sourceMappingURL=star.component.js.map