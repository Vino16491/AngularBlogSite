import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { userSignUpModel } from "../models/userModel";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: "app-signuppage",
  templateUrl: "./signuppage.component.html",
  styleUrls: ["./signuppage.component.css"]
})
export class SignuppageComponent implements OnInit {
  validFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  userSignUpData = new userSignUpModel("", "", "", null);
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onSubmit() {
    this.authService.registeredUser({
      email: this.userSignUpData.email,
      password: this.userSignUpData.password
    });

    if (this.authService.isAuth) {
      this.router.navigate(["/blogs"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
