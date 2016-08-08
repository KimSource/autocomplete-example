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
var hangul_1 = require('../../../libs/hangul');
var CityFilterPipe = (function () {
    function CityFilterPipe() {
    }
    CityFilterPipe.prototype.transform = function (cities, filter) {
        if (cities && filter) {
            var filtered = [];
            for (var i = 0, len = cities.length; i < len; i++) {
                var city = cities[i];
                var j = void 0, keys = Object.keys(city), len2 = keys.length;
                for (j = 0; j < len2; j++) {
                    if (city[keys[j]] && typeof city[keys[j]] !== 'Object' && hangul_1.Hangul.splitHangul(city[keys[j]].toString().toLowerCase().replace(/\s+/, '')).indexOf(hangul_1.Hangul.splitHangul(filter.toLowerCase().replace(/\s+/, ''))) > -1) {
                        break;
                    }
                }
                if (j < len2) {
                    filtered.push(city);
                }
            }
            return filtered;
        }
        else {
            return cities;
        }
    };
    CityFilterPipe = __decorate([
        core_1.Pipe({ name: 'cityFilterPipe' }), 
        __metadata('design:paramtypes', [])
    ], CityFilterPipe);
    return CityFilterPipe;
}());
exports.CityFilterPipe = CityFilterPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9waXBlcy9jaXR5LWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFFcEQsdUJBQXVCLHNCQUFzQixDQUFDLENBQUE7QUFLOUM7SUFBQTtJQXFCQSxDQUFDO0lBcEJDLGtDQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsTUFBYztRQUN0QyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLFFBQVEsR0FBVyxFQUFFLENBQUM7WUFDMUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUSxFQUFFLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1RCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxlQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbE4sS0FBSyxDQUFDO29CQUNSLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQXJCSDtRQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxDQUFDOztzQkFBQTtJQXNCL0IscUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHNCQUFjLGlCQXFCMUIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvcGlwZXMvY2l0eS1maWx0ZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGFuZ3VsIH0gZnJvbSAnLi4vLi4vLi4vbGlicy9oYW5ndWwnO1xuXG5pbXBvcnQgeyBDaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2NpdHkubW9kZWwnO1xuXG5AUGlwZSh7bmFtZTogJ2NpdHlGaWx0ZXJQaXBlJ30pXG5leHBvcnQgY2xhc3MgQ2l0eUZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGNpdGllczogQ2l0eVtdLCBmaWx0ZXIgOnN0cmluZyk6IENpdHlbXSB7XG4gICAgaWYgKGNpdGllcyAmJiBmaWx0ZXIpIHtcbiAgICAgIGxldCBmaWx0ZXJlZDogQ2l0eVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2l0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBjaXR5ID0gY2l0aWVzW2ldO1xuICAgICAgICBsZXQgajogbnVtYmVyLCBrZXlzID0gT2JqZWN0LmtleXMoY2l0eSksIGxlbjIgPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgICAgIGlmIChjaXR5W2tleXNbal1dICYmIHR5cGVvZiBjaXR5W2tleXNbal1dICE9PSAnT2JqZWN0JyAmJiBIYW5ndWwuc3BsaXRIYW5ndWwoY2l0eVtrZXlzW2pdXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy8sICcnKSkuaW5kZXhPZihIYW5ndWwuc3BsaXRIYW5ndWwoZmlsdGVyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy8sICcnKSkpID4gLTEpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaiA8IGxlbjIpIHtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGNpdHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaXRpZXM7XG4gICAgfVxuICB9XG59XG4iXX0=
