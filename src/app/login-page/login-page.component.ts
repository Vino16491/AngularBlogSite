import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _authservice: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailId: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
      userPass: new FormControl("", { validators: [Validators.required] })
    });
  }
  onSubmit() {
    this._authservice.login({
      email: this.loginForm.value.emailId,
      password: this.loginForm.value.userPass
    });
  }
}
