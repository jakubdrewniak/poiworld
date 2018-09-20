var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var PoiTypePipe = /** @class */ (function () {
    function PoiTypePipe() {
    }
    PoiTypePipe.prototype.transform = function (value) {
        switch (value) {
            case 1: return 'Fire';
            case 2: return 'Contact/Juggling';
            case 3: return 'Sock';
            case 4: return 'Other';
            default: value.toString();
        }
    };
    PoiTypePipe = __decorate([
        Pipe({ name: 'poiType' })
    ], PoiTypePipe);
    return PoiTypePipe;
}());
export { PoiTypePipe };
//# sourceMappingURL=poi-type.pipe.js.map