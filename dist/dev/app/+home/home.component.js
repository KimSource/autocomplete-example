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
var search_component_1 = require('./components/search.component');
var city_detail_component_1 = require('./components/city-detail.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.onSelectCity = function (e) {
        this.selectedCity = e.city;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [search_component_1.SearchComponent, city_detail_component_1.CityDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBSWxELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2hFLHNDQUFvQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBWXpFO0lBQUE7SUFLQSxDQUFDO0lBSEMsb0NBQVksR0FBWixVQUFhLENBQU07UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFYSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDJDQUFtQixDQUFDO1NBQ25ELENBQUM7O3FCQUFBO0lBTUYsb0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHFCQUFhLGdCQUt6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENpdHkgfSBmcm9tICcuL21vZGVscy9jaXR5Lm1vZGVsJztcblxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2l0eURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaXR5LWRldGFpbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW1NlYXJjaENvbXBvbmVudCwgQ2l0eURldGFpbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHNlbGVjdGVkQ2l0eTogQ2l0eTtcbiAgb25TZWxlY3RDaXR5KGU6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0gZS5jaXR5O1xuICB9XG59XG4iXX0=
