import { Component, OnInit } from '@angular/core';
import { CoutriesService } from "./../../shared/services/coutries.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private countries: CoutriesService) { }

  ngOnInit() { 
    this.getCountries();
  }

  getCountries(){
      this.countries.getCountryData();
  }
  
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];


}
