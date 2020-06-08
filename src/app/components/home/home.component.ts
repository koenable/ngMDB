import { Component, OnInit } from '@angular/core';
import { CoutriesService } from "./../../shared/services/coutries.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private countrServ: CoutriesService) { }

  ngOnInit() { 
    this.countrServ.getCountryData();
  }

  ngAfterViewChecked(){
    this.getCountries();
  }   

  countries: any;


  //fetch countries data from local storage
  getCountries(){   
      this.countries = JSON.parse(localStorage.getItem('Countries'));
      JSON.parse(localStorage.getItem('Countries')).forEach(el => {
          console.log(el);
      });
  };

  
 
}
