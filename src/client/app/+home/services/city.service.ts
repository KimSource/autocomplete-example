import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { City } from '../models/city.model';

@Injectable()
export class CityService {
  constructor(private http: Http) {}

  // JSON HTTP 요청
  get(): Observable<City[]> {
    return this.http.get('/assets/cities.json')
    .delay(new Date(Date.now() + 300))
    .map((res: Response) => res.json().result.list)
    .catch(this.handleError);
  }

  // 에러 처리
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
