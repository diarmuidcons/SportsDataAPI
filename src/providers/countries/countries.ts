import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesProvider {
 
  constructor(public http: HttpClient) {
    console.log('Hello CountriesProvider Provider');
  }
  getCountry():Observable<any>{
  return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries/48?apikey=412738d0-861b-11ed-8119-c1c1b4fb9107")
  console.log("countries api accessed");
  }

}
