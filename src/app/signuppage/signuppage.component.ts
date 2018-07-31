import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userSignUpModel } from '../models/userModel';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
  validFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  userSignUpData = new userSignUpModel('', '', '', null);
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){

    // alert('Hello World ' + JSON.stringify(this.userSignUpData));
    this.router.navigate(['blogs']);
  }

}
