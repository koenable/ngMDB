import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 constructor(){}

  ngOnInit() { 
    // this.countrServ.getCountryData();
  }

  // tips = [1,2,3,4]
  tips = [
    "Settle arguments with words, not fists or weapons",
    "Learn safe routes for walking in the neighborhood, and know good places to seek help",
    "Report any crimes or suspicious actions to the police, school authorities, and parents",
    "Don't open the door to anyone you and your parents don't know and trust."]

  model = new User('','','');

  submitted = false;

  onSubmit(form?:NgForm){
      console.log(form.value);
     this.submitted = true; 
  }

  newHero() {
    this.model = new User('', '', '');
  }
  
 
}
