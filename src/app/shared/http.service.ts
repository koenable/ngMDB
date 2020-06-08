import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService{

  
  constructor(private http: HttpClient) { }
  

  getData(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  };

 

}
