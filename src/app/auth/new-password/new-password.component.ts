import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-new-password",
  templateUrl: "./new-password.component.html",
  styleUrls: ["./new-password.component.css"]
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  token;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.token = params.token));
    this.newPasswordForm = new FormGroup({
      newPassword: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),

      confirmPassword: new FormControl("", {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  submit() {
    console.log(this.newPasswordForm.value.newPassword);
    this.authService.newPasswordSet(
      this.newPasswordForm.value.newPassword,
      this.token
    );
  }
}
