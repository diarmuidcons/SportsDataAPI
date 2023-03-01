import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings'
import { HttpClient } from '@angular/common/http';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { SportDataProvider } from '../../providers/sport-data/sport-data';
import { Storage } from '@ionic/storage';
import { CountriesProvider } from '../../providers/countries/countries';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

content: string[];
author: string;
tags: string[];
name: string;
firstname: string;
lastname: string;
age: number;
height: number;



  constructor(public navCtrl: NavController, private qt: QuotesProvider, private sdp:SportDataProvider, private storage: Storage) {
  	
  }

  ionViewWillEnter(){
  	this.qt.getQuotes().subscribe(data => {
  		this.author = data.author;
  		this.tags = data.tags;
  		this.content = data.content;
  		console.log("Quotes api accessed");
  		})
  	
  
    this.sdp.getSportData().subscribe(data => {
  		this.name = data.name;
  		this.firstname = data.firstname;
  		this.lastname = data.lastname;
  		this.age = data.age;
  		this.height = data.height;
  		console.log("sport-data retrieved");

  	})
  }

  openSettingsPage(){
  this.navCtrl.push(SettingsPage);
  }


  
  
  
  

}
