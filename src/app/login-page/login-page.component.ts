import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from '../models/userModel';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  validFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  userLoginData = new userModel('', '');
  constructor(private _authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    let user = this._authservice.getAuthData();

    for (let i=0; i< user.length; i++){
      if(user[i].userId == this.userLoginData.email){
        if(user[i].password == this.userLoginData.password){
          this._authservice.isUserLoggedIn = true;
          this.router.navigate(['blogs']);
        }else{
          alert("wrong user id and password");
        }
      }
    }
    



  }

}
