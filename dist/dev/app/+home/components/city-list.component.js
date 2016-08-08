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
var city_component_1 = require('./city.component');
var city_filter_pipe_1 = require('../pipes/city-filter.pipe');
var CityListComponent = (function () {
    function CityListComponent(cityService) {
        this.cityService = cityService;
        this.selectCity = new core_1.EventEmitter();
    }
    CityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityService.get()
            .subscribe(function (cities) { return _this.cities = cities; });
    };
    CityListComponent.prototype.onSelect = function (e, city) {
        e.city = city;
        this.selectCity.emit(e);
        e.target.blur();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CityListComponent.prototype, "selectCity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CityListComponent.prototype, "filter", void 0);
    CityListComponent = __decorate([
        core_1.Component({
            selector: 'city-list',
            template: "\n  <city *ngFor=\"let city of cities | cityFilterPipe: filter\" (click)=\"onSelect($event, city)\" (keydown.enter)=\"onSelect($event, city)\" (keyup.space)=\"onSelect($event, city)\" [city]=\"city\" tabIndex=\"0\"></city>\n  <div *ngIf=\"!cities || (cities | cityFilterPipe: filter).length === 0\" style=\"padding: 8px; color: gray\">\uACB0\uACFC \uC5C6\uC74C</div>\n  ",
            styles: [],
            directives: [city_component_1.CityComponent],
            providers: [city_service_1.CityService],
            pipes: [city_filter_pipe_1.CityFilterPipe]
        }), 
        __metadata('design:paramtypes', [city_service_1.CityService])
    ], CityListComponent);
    return CityListComponent;
}());
exports.CityListComponent = CityListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2NpdHktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUkvRSw2QkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV2RCwrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUVqRCxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQWEzRDtJQU9FLDJCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUo1QyxlQUFVLEdBQXVCLElBQUksbUJBQVksRUFBUSxDQUFDO0lBSVgsQ0FBQztJQUVoRCxvQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTthQUNyQixTQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxvQ0FBUSxHQUFSLFVBQVMsQ0FBTSxFQUFFLElBQVU7UUFDekIsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFqQkQ7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBRVQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBZlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLG9YQUdUO1lBQ0QsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUMsaUNBQWMsQ0FBQztTQUN4QixDQUFDOzt5QkFBQTtJQXFCRix3QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlkseUJBQWlCLG9CQW9CN0IsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvY29tcG9uZW50cy9jaXR5LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2NpdHkubW9kZWwnO1xuXG5pbXBvcnQgeyBDaXR5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NpdHkuc2VydmljZSc7XG5cbmltcG9ydCB7IENpdHlDb21wb25lbnQgfSBmcm9tICcuL2NpdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2l0eUZpbHRlclBpcGUgfSBmcm9tICcuLi9waXBlcy9jaXR5LWZpbHRlci5waXBlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2l0eS1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGNpdHkgKm5nRm9yPVwibGV0IGNpdHkgb2YgY2l0aWVzIHwgY2l0eUZpbHRlclBpcGU6IGZpbHRlclwiIChjbGljayk9XCJvblNlbGVjdCgkZXZlbnQsIGNpdHkpXCIgKGtleWRvd24uZW50ZXIpPVwib25TZWxlY3QoJGV2ZW50LCBjaXR5KVwiIChrZXl1cC5zcGFjZSk9XCJvblNlbGVjdCgkZXZlbnQsIGNpdHkpXCIgW2NpdHldPVwiY2l0eVwiIHRhYkluZGV4PVwiMFwiPjwvY2l0eT5cbiAgPGRpdiAqbmdJZj1cIiFjaXRpZXMgfHwgKGNpdGllcyB8IGNpdHlGaWx0ZXJQaXBlOiBmaWx0ZXIpLmxlbmd0aCA9PT0gMFwiIHN0eWxlPVwicGFkZGluZzogOHB4OyBjb2xvcjogZ3JheVwiPuqysOqzvCDsl4bsnYw8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgZGlyZWN0aXZlczogW0NpdHlDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtDaXR5U2VydmljZV0sXG4gIHBpcGVzOiBbQ2l0eUZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIENpdHlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2l0aWVzOiBDaXR5W107XG4gIEBPdXRwdXQoKVxuICBzZWxlY3RDaXR5OiBFdmVudEVtaXR0ZXI8Q2l0eT4gPSBuZXcgRXZlbnRFbWl0dGVyPENpdHk+KCk7XG4gIEBJbnB1dCgpXG4gIGZpbHRlcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2l0eVNlcnZpY2U6IENpdHlTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2l0eVNlcnZpY2UuZ2V0KClcbiAgICAuc3Vic2NyaWJlKChjaXRpZXMpID0+IHRoaXMuY2l0aWVzID0gY2l0aWVzKTtcbiAgfVxuXG4gIC8vIOuPhOyLnCDshKDtg50g7IucIOydtOuypO2KuCDrsJzsg51cbiAgb25TZWxlY3QoZTogYW55LCBjaXR5OiBDaXR5KSB7XG4gICAgZS5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnNlbGVjdENpdHkuZW1pdChlKTtcbiAgICBlLnRhcmdldC5ibHVyKCk7XG4gIH1cbn1cbiJdfQ==
