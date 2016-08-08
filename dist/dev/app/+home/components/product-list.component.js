"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('../services/product.service');
var product_component_1 = require('./product.component');
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.items = this.productService.getProducts()[0].items;
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            template: "\n  <ul>\n    <product *ngFor=\"let item of items\"></product>\n  </ul>\n  ",
            styles: ["\n  ul {\n    list-style: none;\n  }\n  "],
            directives: [product_component_1.ProductComponent],
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUlsRCxnQ0FBK0IsNkJBQTZCLENBQUMsQ0FBQTtBQUU3RCxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQWlCdkQ7SUFFRSw4QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUcsQ0FBQztJQUN0RCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBcEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSw2RUFJVDtZQUNELE1BQU0sRUFBRSxDQUFDLDBDQUlSLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztZQUM5QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUM7OzRCQUFBO0lBT0YsMkJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDRCQUFvQix1QkFNaEMsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9kdWN0Lm1vZGVsJztcblxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2R1Y3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDx1bD5cbiAgICA8cHJvZHVjdCAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPjwvcHJvZHVjdD5cbiAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBgXSxcbiAgZGlyZWN0aXZlczogW1Byb2R1Y3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtQcm9kdWN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtczogUHJvZHVjdFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSkge31cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdHMoKVswXS5pdGVtcztcbiAgfVxufVxuIl19
