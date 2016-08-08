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
var CityComponent = (function () {
    function CityComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CityComponent.prototype, "city", void 0);
    CityComponent = __decorate([
        core_1.Component({
            selector: 'city',
            template: "\n  {{city.cityNameLN}} ({{city.countryNameLN}})\n  ",
            styles: ["\n  :host {\n    display: block;\n    padding: 8px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], CityComponent);
    return CityComponent;
}());
exports.CityComponent = CityComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2NpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFnQmpEO0lBQUE7SUFHQSxDQUFDO0lBRkM7UUFBQyxZQUFLLEVBQUU7OytDQUFBO0lBYlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLHNEQUVUO1lBQ0QsTUFBTSxFQUFFLENBQUMsOERBS1IsQ0FBQztTQUNILENBQUM7O3FCQUFBO0lBSUYsb0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHFCQUFhLGdCQUd6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9jb21wb25lbnRzL2NpdHkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2NpdHkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaXR5JyxcbiAgdGVtcGxhdGU6IGBcbiAge3tjaXR5LmNpdHlOYW1lTE59fSAoe3tjaXR5LmNvdW50cnlOYW1lTE59fSlcbiAgYCxcbiAgc3R5bGVzOiBbYFxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIENpdHlDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjaXR5OiBDaXR5O1xufVxuIl19
