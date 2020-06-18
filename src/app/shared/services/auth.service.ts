import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  URL: 'localhost:300/login';

  login(details:User){
      this.http.postdata(this.URL,details).subscribe((data)=>{
            if(data) { return console.log("failed" + data) }
      })
  }

}
