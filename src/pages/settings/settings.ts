import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Alert} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { SportDataProvider } from '../../providers/sport-data/sport-data'

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {


countryID: number;
newCountryID: number;
minimumAge: number;
newMinimumAge: number;
maximumAge: number;
newMaximumAge: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertController: AlertController, public sdp: SportDataProvider) {
  }

  

  ionViewDidEnter(){
  this.storage.get("CountryID")
  .then((val) => {
  this.countryID = val
  console.log("getting countryID");
  })
  this.storage.get("minimumAge")
  .then((val1) => {
  this.minimumAge = val1
  console.log("getting minimum age");
  })
  this.storage.get("maximumAge")
  .then((val2) => {
  this.maximumAge = val2
  console.log("getting maximum age");
  })
  .catch((err) => {
  alert("Error Accessing Storage")
  })
  }

  

  saveCountryID(){
  this.newCountryID = this.countryID;
  
  this.storage.set("countryID", this.countryID);
  console.log("saveCountryID()");
  }

  saveMinimumAge(){
  this.minimumAge = this.newMinimumAge;
  console.log("saveMinimumAge()");
  this.storage.set("minimumAge", this.minimumAge);
  }
  
  saveMaximumAge(){
  this.maximumAge = this.newMaximumAge;
  console.log("saveMaximumAge()");
  this.storage.set("maximumAge", this.maximumAge);
  
  }
  
  }




