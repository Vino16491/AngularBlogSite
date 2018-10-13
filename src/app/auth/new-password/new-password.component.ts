import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newPasswordForm = new FormGroup({
      newPassword: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),

      confirmPassword:new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
    
    });
  }

}
