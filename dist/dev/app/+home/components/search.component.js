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
var city_service_1 = require('../services/city.service');
var city_list_component_1 = require('./city-list.component');
var SearchComponent = (function () {
    function SearchComponent(cityService) {
        this.cityService = cityService;
        this.selectCity = new core_1.EventEmitter();
    }
    SearchComponent.prototype.onFocus = function (e) {
        if (e.type === 'focusin') {
            this.focused = true;
        }
        else if (e.type === 'focusout') {
            if (!e.relatedTarget || (e.relatedTarget.tagName.toLowerCase() !== 'city'))
                this.focused = false;
        }
    };
    SearchComponent.prototype.onSearchChange = function (e) {
        this.search = e.target.value;
    };
    SearchComponent.prototype.onCitySelect = function (e) {
        this.selectCity.emit(e);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchComponent.prototype, "selectCity", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: "\n  <div (focusin)=\"onFocus($event)\" (focusout)=\"onFocus($event)\">\n    <input (input)=\"onSearchChange($event)\" type=\"search\" placeholder=\"Search\" class=\"search-input\">\n    <div class=\"city-list-popup\" [class.visible]=\"focused\">\n      <city-list (selectCity)=\"onCitySelect($event)\" [filter]=\"search\"></city-list>\n    </div>\n  </div>\n  ",
            styles: ["\n  :host {\n    display: block;\n  }\n  .search-input {\n    display: block;\n    width: 100%;\n  }\n  .city-list-popup {\n    position: absolute;\n    display: none;\n    min-height: 1em;\n    padding-top: 2px;\n    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .5);\n    background: white;\n    z-index: 99;\n  }\n  .city-list-popup.visible {\n    display: inline-block;\n  }\n  "],
            directives: [city_list_component_1.CityListComponent],
            providers: [city_service_1.CityService]
        }), 
        __metadata('design:paramtypes', [city_service_1.CityService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRCxlQUFlLENBQUMsQ0FBQTtBQUloRSw2QkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV2RCxvQ0FBa0MsdUJBQXVCLENBQUMsQ0FBQTtBQW9DMUQ7SUFNRSx5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFGNUMsZUFBVSxHQUF1QixJQUFJLG1CQUFZLEVBQVEsQ0FBQztJQUVYLENBQUM7SUFHaEQsaUNBQU8sR0FBUCxVQUFRLENBQU07UUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBR0Qsd0NBQWMsR0FBZCxVQUFlLENBQU07UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBR0Qsc0NBQVksR0FBWixVQUFhLENBQU07UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQXZCRDtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFyQ1g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDBXQU9UO1lBQ0QsTUFBTSxFQUFFLENBQUMsMFhBb0JSLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQ3pCLENBQUM7O3VCQUFBO0lBNEJGLHNCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSx1QkFBZSxrQkEyQjNCLENBQUEiLCJmaWxlIjoiYXBwLytob21lL2NvbXBvbmVudHMvc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2l0eSB9IGZyb20gJy4uL21vZGVscy9jaXR5Lm1vZGVsJztcblxuaW1wb3J0IHsgQ2l0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaXR5LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDaXR5TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2l0eS1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlYXJjaCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgKGZvY3VzaW4pPVwib25Gb2N1cygkZXZlbnQpXCIgKGZvY3Vzb3V0KT1cIm9uRm9jdXMoJGV2ZW50KVwiPlxuICAgIDxpbnB1dCAoaW5wdXQpPVwib25TZWFyY2hDaGFuZ2UoJGV2ZW50KVwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIGNsYXNzPVwic2VhcmNoLWlucHV0XCI+XG4gICAgPGRpdiBjbGFzcz1cImNpdHktbGlzdC1wb3B1cFwiIFtjbGFzcy52aXNpYmxlXT1cImZvY3VzZWRcIj5cbiAgICAgIDxjaXR5LWxpc3QgKHNlbGVjdENpdHkpPVwib25DaXR5U2VsZWN0KCRldmVudClcIiBbZmlsdGVyXT1cInNlYXJjaFwiPjwvY2l0eS1saXN0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNpdHktbGlzdC1wb3B1cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWluLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuICAuY2l0eS1saXN0LXBvcHVwLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBgXSxcbiAgZGlyZWN0aXZlczogW0NpdHlMaXN0Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbQ2l0eVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XG4gIGZvY3VzZWQ6IGJvb2xlYW47XG4gIHNlYXJjaDogc3RyaW5nO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0Q2l0eTogRXZlbnRFbWl0dGVyPENpdHk+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaXR5PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2l0eVNlcnZpY2U6IENpdHlTZXJ2aWNlKSB7fVxuXG4gIC8vIO2PrOy7pOyKpCDsnbgg7JWE7JuDIOydtOuypO2KuCDrpqzsiqTrhIhcbiAgb25Gb2N1cyhlOiBhbnkpIHtcbiAgICBpZiAoZS50eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgIGlmICghZS5yZWxhdGVkVGFyZ2V0IHx8IChlLnJlbGF0ZWRUYXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnY2l0eScpKVxuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyDqsoDsg4kg7J6F66ClXG4gIG9uU2VhcmNoQ2hhbmdlKGU6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoID0gZS50YXJnZXQudmFsdWU7XG4gIH1cblxuICAvLyDrj4Tsi5wg7ISg7YOdIOyLnCDrhJjqsqjspIxcbiAgb25DaXR5U2VsZWN0KGU6IGFueSkge1xuICAgIHRoaXMuc2VsZWN0Q2l0eS5lbWl0KGUpO1xuICB9XG59XG4iXX0=
