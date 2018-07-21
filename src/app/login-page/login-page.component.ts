import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';
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
  constructor(private _authservice: AuthService) { }

  ngOnInit() {
  }


}
