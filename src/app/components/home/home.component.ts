import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';

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
        style({ opacity: 0, transform: 'translateY(-50%)' }),
        animate('0.6s 900ms ease-in-out')
      ]),
      transition('* => void', [
        animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('slideUp', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('0.6s 900ms ease-in-out')
      ]),
      transition('* => void', [
        animate('10ms ease-in-out', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router) { }


  ngOnInit() {

  }

  model = new User('', '');

  // response data
  loginRes: User;

  // When user clicks the login 
  // user the auth service to make a post request    

  onSubmit(form: NgForm) {
    this.model = new User(form.value.email, form.value.password);
    // console.log(this.model);
    this.authServ.login(this.model).subscribe((res: User) => {
      if (res['data']) {

        if (res['msg'] == "LogInsuccess") {
          alert("Logn Success!")
          this.saveTostorage(res['data'])
          window.location.replace("http://localhost:4200/community");
        } else {
          alert("login Failed! Please try again")
        }

      } else {

      }


    })
  }

  // reset form
  resetForm(form: NgForm) {
    form.reset();
  }



  //save data to storage
  saveTostorage(user: User) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  //clear user from storage
  signOut() {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
  }


}
