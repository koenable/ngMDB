import { User } from './../models/user';
import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpService) { }
  constructor(private http: HttpClient) { }

  URL: 'localhost:300/login';

  //post data
  login(details:User){
    return this.http.post(this.URL,details)
  }

  // login(details:User){
  //     this.http.postdata(this.URL,details).subscribe((data)=>{
  //           if(data) { return "failed" }
  //     })
  // }

}
