import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { City } from '../models/city.model';

import { CityService } from '../services/city.service';

import { CityComponent } from './city.component';

import { CityFilterPipe } from '../pipes/city-filter.pipe';

@Component({
  selector: 'city-list',
  template: `
  <city *ngFor="let city of cities | cityFilterPipe: filter" (click)="onSelect($event, city)" (keydown.enter)="onSelect($event, city)" (keyup.space)="onSelect($event, city)" [city]="city" tabIndex="0"></city>
  <div *ngIf="!cities || (cities | cityFilterPipe: filter).length === 0" style="padding: 8px; color: gray">결과 없음</div>
  `,
  styles: [],
  directives: [CityComponent],
  providers: [CityService],
  pipes: [CityFilterPipe]
})
export class CityListComponent implements OnInit {
  cities: City[];
  @Output()
  selectCity: EventEmitter<City> = new EventEmitter<City>();
  @Input()
  filter: string;

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.cityService.get()
    .subscribe((cities) => this.cities = cities);
  }

  // 도시 선택 시 이벤트 발생
  onSelect(e: any, city: City) {
    e.city = city;
    this.selectCity.emit(e);
    e.target.blur();
  }
}
