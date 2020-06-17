import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";


@Injectable({
  providedIn: 'root'
})
export class CoutriesService {
  constructor(private http: HttpService) { }

  ngOnInit() {
  }



  getCountryData() {
    let countries = localStorage.getItem('Countries')
    if (countries == null) {
      console.log("Countries Not set.Fetching data");
      let url = 'https://restcountries.eu/rest/v2/all';
      this.http.getData(url).subscribe(res => {
        localStorage.setItem('Countries', JSON.stringify(res));
        console.log("Saved data");
      })
    }
    else {
      return;
      // this.assignData();
    }

  }


  
}
