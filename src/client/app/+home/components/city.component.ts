import { Component, Input } from '@angular/core';

import { City } from '../models/city.model';

@Component({
  selector: 'city',
  template: `
  {{city.cityNameLN}} ({{city.countryNameLN}})
  `,
  styles: [`
  :host {
    display: block;
    padding: 8px;
  }
  `]
})
export class CityComponent {
  @Input()
  city: City;
}
