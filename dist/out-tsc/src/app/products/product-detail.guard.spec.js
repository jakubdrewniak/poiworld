import { TestBed, inject } from '@angular/core/testing';
import { ProductDetailGuard } from './product-detail.guard';
describe('ProductDetailGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ProductDetailGuard]
        });
    });
    it('should ...', inject([ProductDetailGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=product-detail.guard.spec.js.map