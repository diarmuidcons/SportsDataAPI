import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

/*
  Generated class for the SportDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SportDataProvider {
	

  constructor(public http: HttpClient, private storage: Storage ) {
    console.log('Hello SportDataProvider Provider');
  }
getSportData(): Observable<any>{
    

  

  	return this.http.get("https://app.sportdataapi.com/api/v1/soccer/players?apikey=412738d0-861b-11ed-8119-c1c1b4fb9107&country_id=48" );
  	console.log("sport-data api accessed");
  }
}
