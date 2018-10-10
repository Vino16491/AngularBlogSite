import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-signuppage",
  templateUrl: "./signuppage.component.html",
  styleUrls: ["./signuppage.component.css"]
})
export class SignuppageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.authService.signupMongoServer(form.value.username, form.value.mobileNumber, form.value.emailId, form.value.userPass);
  }
}
