import { Component, OnInit } from '@angular/core';

import { City } from './models/city.model';

import { SearchComponent } from './components/search.component';
import { CityDetailComponent } from './components/city-detail.component';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [SearchComponent, CityDetailComponent]
})
export class HomeComponent {
  selectedCity: City;
  onSelectCity(e: any) {
    this.selectedCity = e.city;
  }
}
