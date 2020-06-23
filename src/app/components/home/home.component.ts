import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideDown', [
        transition('void => *', [
            style({opacity:0, transform: 'translateY(-50%)'}),
            animate('0.6s 900ms ease-in-out')
        ]),
        transition('* => void', [
            animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
        ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
          style({opacity:0, transform: 'translateY(100%)'}),
          animate('0.6s 900ms ease-in-out')
      ]),
      transition('* => void', [
          animate('10ms ease-in-out', style({transform: 'translateY(100%)'}))    
      ])
  ])
  ]
})
export class HomeComponent implements OnInit {

 constructor(private authServ: AuthService){}

  ngOnInit() { 
 
  }

  model = new User('','');

  // response data
  loginRes;

  // When user clicks the login 
  // user the auth service to make a post request    
  onSubmit(form:NgForm){
      this.model = new User(form.value.email, form.value.password);
      // this.authServ.login(this.model)
      this.authServ.login(this.model).subscribe(res=>{
          if(res) { console.log(res)};
      })
    }

  // reset form
  resetForm(form:NgForm){
      form.reset();
  }

  
 
}
