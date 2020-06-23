import { User } from './../models/user';
import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpService) { }
  constructor(private http: HttpClient) { }

  URL= 'http://localhost:4000/auth/';

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
