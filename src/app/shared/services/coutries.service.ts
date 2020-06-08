import { Injectable } from '@angular/core';
import { HttpService } from "./../http.service";


@Injectable({
  providedIn: 'root'
})
export class CoutriesService {
  constructor(private http: HttpService) { }

  ngOnInit() {
  }
  
  Countries: any;


  //
  getCountryData() {
    let url =  'https://restcountries.eu/rest/v2/all';
    this.http.getData(url).subscribe(res => {
      this.Countries = res;
      this.saveCountrydata(this.Countries);    
    })
  }

  saveCountrydata(data){
    if(localStorage.getItem("Countries")){
      console.log("Countries Not set");
    }
    else{
      localStorage.setItem('Countries', JSON.stringify(data))
       console.log("Countries Are set")
      }  

  }
}
