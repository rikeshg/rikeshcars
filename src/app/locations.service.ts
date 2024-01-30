import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpObj: HttpClient) { }

  getPuppies() {
    let puppiesUrl = "https://demo9919602.mockable.io/getPuppies";
    return this.httpObj.get(puppiesUrl);
  }
}
