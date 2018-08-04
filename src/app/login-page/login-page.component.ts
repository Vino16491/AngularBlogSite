import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { userModel } from "../models/userModel";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  validFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  userLoginData = new userModel("", "");
  constructor(private _authservice: AuthService, private router: Router) {}

  ngOnInit() {}
  onSubmit() {

    this._authservice.login({
      email: this.userLoginData.email,
      password: this.userLoginData.password
    });

    if(this._authservice.isAuth()){
      this.router.navigate(['/blogs']);
    }
  }
}
