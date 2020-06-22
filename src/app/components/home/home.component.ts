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

  // tips = [1,2,3,4]
  tips = [
    "Settle arguments with words, not fists or weapons",
    "Learn safe routes for walking in the neighborhood, and know good places to seek help",
    "Report any crimes or suspicious actions to the police, school authorities, and parents",
    "Don't open the door to anyone you and your parents don't know and trust."]

  model = new User('','');

  submitted = false;

  // When user clicks the login button
  onSubmit(form:NgForm){
      this.model = new User(form.value.email, form.value.password);
      // user the auth service to make a post request    
      this.authServ.login(this.model)
    }


  
 
}
