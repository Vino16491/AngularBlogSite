import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
  newPasswordForm: FormGroup;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>console.log(params.token));
    this.newPasswordForm = new FormGroup({
      newPassword: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),

      confirmPassword:new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
    
    });
  }

  submit(){
    console.log(this.newPasswordForm.value.newPassword);
  }

}
