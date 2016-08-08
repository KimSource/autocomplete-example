import { Component, EventEmitter, Output } from '@angular/core';

import { City } from '../models/city.model';

import { CityService } from '../services/city.service';

import { CityListComponent } from './city-list.component';

@Component({
  selector: 'search',
  template: `
  <div (focusin)="onFocus($event)" (focusout)="onFocus($event)">
    <input (input)="onSearchChange($event)" type="search" placeholder="Search" class="search-input">
    <div class="city-list-popup" [class.visible]="focused">
      <city-list (selectCity)="onCitySelect($event)" [filter]="search"></city-list>
    </div>
  </div>
  `,
  styles: [`
  :host {
    display: block;
  }
  .search-input {
    display: block;
    width: 100%;
  }
  .city-list-popup {
    position: absolute;
    display: none;
    min-height: 1em;
    padding-top: 2px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .5);
    background: white;
    z-index: 99;
  }
  .city-list-popup.visible {
    display: inline-block;
  }
  `],
  directives: [CityListComponent],
  providers: [CityService]
})
export class SearchComponent {
  focused: boolean;
  search: string;
  @Output()
  selectCity: EventEmitter<City> = new EventEmitter<City>();

  constructor(private cityService: CityService) {}

  // 포커스 인 아웃 이벤트 리스너
  onFocus(e: any) {
    if (e.type === 'focusin') {
      this.focused = true;
    } else if (e.type === 'focusout') {
      if (!e.relatedTarget || (e.relatedTarget.tagName.toLowerCase() !== 'city'))
        this.focused = false;
    }
  }

  // 검색 입력
  onSearchChange(e: any) {
    this.search = e.target.value;
  }

  // 도시 선택 시 넘겨줌
  onCitySelect(e: any) {
    this.selectCity.emit(e);
  }
}
