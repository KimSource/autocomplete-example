import { Pipe, PipeTransform } from '@angular/core';

import { Hangul } from '../../../libs/hangul';

import { City } from '../models/city.model';

@Pipe({name: 'cityFilterPipe'})
export class CityFilterPipe implements PipeTransform {
  transform(cities: City[], filter :string): City[] {
    if (cities && filter) {
      let filtered: City[] = [];
      for (let i = 0, len = cities.length; i < len; i++) {
        let city = cities[i];
        let j: number, keys = Object.keys(city), len2 = keys.length;
        for (j = 0; j < len2; j++) {
          if (city[keys[j]] && typeof city[keys[j]] !== 'Object' && Hangul.splitHangul(city[keys[j]].toString().toLowerCase().replace(/\s+/, '')).indexOf(Hangul.splitHangul(filter.toLowerCase().replace(/\s+/, ''))) > -1) {
            break;
          }
        }
        if (j < len2) {
          filtered.push(city);
        }
      }
      return filtered;
    } else {
      return cities;
    }
  }
}
