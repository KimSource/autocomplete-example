import { Component, Input } from '@angular/core';

import { City } from '../models/city.model';

@Component({
  selector: 'city-detail',
  template: `
  <div>도시 코드: {{city.cityCode}}</div>
  <div>도시 영어 이름: {{city.cityNameEN}}</div>
  <div>도시 이름: {{city.cityNameLN}}</div>
  <div>국가 코드: {{city.countryCode}}</div>
  <div>국가 영어 이름: {{city.countryNameEN}}</div>
  <div>국가 이름: {{city.countryNameLN}}</div>
  <div>관련 아이템: {{city.relatedItems}}</div>
  <div>상태 코드: {{city.stateCode}}</div>
  <div>종류: {{city.type}}</div>
  <div>코드: {{city.value}}</div>
  `,
  styles: [`
  :host {
    display: block;
    padding: 8px;
  }
  `]
})
export class CityDetailComponent {
  @Input()
  city: City;
}
