import { Subject } from "rxjs";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { map, take, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
/* ngrx ........... */
import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import * as Auth from "./auth.actions";

/* Firebase */
import { AngularFireAuth } from "@angular/fire/auth";
import { SharedService } from "../shared-service.service";
import {
  HttpHeaders,
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";

export interface successResponse {
  userId: "";
  token: "";
  message: "";
}
export interface errResponse {
  error: {
    error: {
      message: "";
    };
    title: "";
  };
}
@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
    private toastr: SharedService,
    private http: HttpClient
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        // this.router.navigate(["/blogs"]);
      } else {
        this.store.dispatch(new Auth.SetUnAuthenticated());
        // this.router.navigate(["/login"]);
      }
    });
  }

  cloudApiPOST(body, apiname) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const url = `http://localhost:5000/blog-9e6be/us-central1/blogapi/${apiname}`;
    return this.http.post(url, body, { headers });
  }
  registeredUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log("success");
      })
      .catch(err => this.toastr.showWarn("Registration err", err.message));
  }

  loginMongoServer(authdata: AuthData) {
    let body = authdata;
    this.cloudApiPOST(body, "login").subscribe(
      (l: successResponse) => {
        if (l.token) {
          this.toastr.showSuccess("success", "user logged in successfully");
          this.store.dispatch(new Auth.SetAuthenticated());
          return this.router.navigate(["/blogs"]);
        }
      },
      err => {
        this.toastr.showError("error", "User Id or password is incorrect");
      }
    );
  }

  passresetMongoServer(email){
    const body=email;
    this.cloudApiPOST(body, "passreset").subscribe(r=>{
      this.toastr.showSuccess('reset email', 'password reset email sent to your registered id successfully')
    }, err=>{
      this.toastr.showError('server error', 'Please contact administrator');
    })
  }

  signupMongoServer(firstname, mobileNumber, email, password) {
    let body = {
      firstname: firstname,
      mobileNumber: mobileNumber,
      password: password,
      email: email
    };
    this.cloudApiPOST(body, "signup").subscribe(
      s => {
        this.toastr.showSuccess("registered", "user registered successfully");
        return this.router.navigate(["/login"]);
      },
      err => {
        this.toastr.showError(err.error.title, err.error.shortMsg);
        console.log(JSON.stringify(err));
      }
    );
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log("success");
      })
      .catch(err => this.toastr.showWarn("Login Err", err.message));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
