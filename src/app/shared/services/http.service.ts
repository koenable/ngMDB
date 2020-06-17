import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService{

  
  constructor(private http: HttpClient) { }
  
  // fetch data
  getData(url){
    return this.http.get(url);
  };

  //post data
  postdata(url,data){
    return this.http.post(url,data)
  }



  // getData(){
  //   return this.http.get('https://restcountries.eu/rest/v2/all');
  // };

}
