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
var CityDetailComponent = (function () {
    function CityDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CityDetailComponent.prototype, "city", void 0);
    CityDetailComponent = __decorate([
        core_1.Component({
            selector: 'city-detail',
            template: "\n  <div>\uB3C4\uC2DC \uCF54\uB4DC: {{city.cityCode}}</div>\n  <div>\uB3C4\uC2DC \uC601\uC5B4 \uC774\uB984: {{city.cityNameEN}}</div>\n  <div>\uB3C4\uC2DC \uC774\uB984: {{city.cityNameLN}}</div>\n  <div>\uAD6D\uAC00 \uCF54\uB4DC: {{city.countryCode}}</div>\n  <div>\uAD6D\uAC00 \uC601\uC5B4 \uC774\uB984: {{city.countryNameEN}}</div>\n  <div>\uAD6D\uAC00 \uC774\uB984: {{city.countryNameLN}}</div>\n  <div>\uAD00\uB828 \uC544\uC774\uD15C: {{city.relatedItems}}</div>\n  <div>\uC0C1\uD0DC \uCF54\uB4DC: {{city.stateCode}}</div>\n  <div>\uC885\uB958: {{city.type}}</div>\n  <div>\uCF54\uB4DC: {{city.value}}</div>\n  ",
            styles: ["\n  :host {\n    display: block;\n    padding: 8px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], CityDetailComponent);
    return CityDetailComponent;
}());
exports.CityDetailComponent = CityDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2NpdHktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBeUJqRDtJQUFBO0lBR0EsQ0FBQztJQUZDO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXRCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUseW1CQVdUO1lBQ0QsTUFBTSxFQUFFLENBQUMsOERBS1IsQ0FBQztTQUNILENBQUM7OzJCQUFBO0lBSUYsMEJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDJCQUFtQixzQkFHL0IsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9jaXR5LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENpdHkgfSBmcm9tICcuLi9tb2RlbHMvY2l0eS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NpdHktZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdj7rj4Tsi5wg7L2U65OcOiB7e2NpdHkuY2l0eUNvZGV9fTwvZGl2PlxuICA8ZGl2PuuPhOyLnCDsmIHslrQg7J2066aEOiB7e2NpdHkuY2l0eU5hbWVFTn19PC9kaXY+XG4gIDxkaXY+64+E7IucIOydtOumhDoge3tjaXR5LmNpdHlOYW1lTE59fTwvZGl2PlxuICA8ZGl2Puq1reqwgCDsvZTrk5w6IHt7Y2l0eS5jb3VudHJ5Q29kZX19PC9kaXY+XG4gIDxkaXY+6rWt6rCAIOyYgeyWtCDsnbTrpoQ6IHt7Y2l0eS5jb3VudHJ5TmFtZUVOfX08L2Rpdj5cbiAgPGRpdj7qta3qsIAg7J2066aEOiB7e2NpdHkuY291bnRyeU5hbWVMTn19PC9kaXY+XG4gIDxkaXY+6rSA66CoIOyVhOydtO2FnDoge3tjaXR5LnJlbGF0ZWRJdGVtc319PC9kaXY+XG4gIDxkaXY+7IOB7YOcIOy9lOuTnDoge3tjaXR5LnN0YXRlQ29kZX19PC9kaXY+XG4gIDxkaXY+7KKF66WYOiB7e2NpdHkudHlwZX19PC9kaXY+XG4gIDxkaXY+7L2U65OcOiB7e2NpdHkudmFsdWV9fTwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ2l0eURldGFpbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNpdHk6IENpdHk7XG59XG4iXX0=
