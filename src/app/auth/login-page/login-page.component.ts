import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { MatDialog } from "@angular/material";
import { PassresetComponent } from "../passreset/passreset.component";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loginAttempt= 0;
  constructor(private _authservice: AuthService, private router: Router, private dialog:MatDialog) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailId: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
      userPass: new FormControl("", { validators: [Validators.required] })
    });
  }

  forgetPassword():void{
    const passResetDialog = this.dialog.open(PassresetComponent,{width:'70vw'});
    passResetDialog.afterClosed().subscribe(result=>{
      console.log(result);
      // this._authservice.passresetMongoServer(result)
    })
  }

  onSubmit() {
    this.loginAttempt++
    this._authservice.loginMongoServer({
      email: this.loginForm.value.emailId,
      password: this.loginForm.value.userPass
    })
  }
}
