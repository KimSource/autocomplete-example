import { CityRelatedItem } from './city-related-item.model';

export interface City {
  // 도시 코드
  cityCode: string;
  // 도시 영어 이름
  cityNameEN: string;
  // 도시 이름
  cityNameLN: string;
  // 국가 코드
  countryCode: string;
  // 국가 영어 이름
  countryNameEN: string;
  // 국가 이름
  countryNameLN: string;
  // 관련 아이템
  relatedItems: CityRelatedItem[];
  // 상태 코드
  stateCode: string;
  // 종류
  type: string;
  // 코드
  value: string;
}
