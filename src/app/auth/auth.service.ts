import { Subject } from "rxjs";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Router } from "@angular/router";

import { Injectable } from "@angular/core";
/* ngrx ........... */
import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import * as Auth from "./auth.actions";

/* Firebase */
import { AngularFireAuth } from "@angular/fire/auth";
import { SharedService } from "../shared-service.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
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

  cloudApiPOST(body, apiname){
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const url = `http://localhost:5000/blog-9e6be/us-central1/blogapi/${apiname}`;
    return this.http.post(url, body, { headers });
  }
  registeredUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log('success');
      })
      .catch(err => this.toastr.showWarn('Registration err' ,err.message));
  }

  loginMongoServer(authdata: AuthData){
    let body = authdata;
    this.cloudApiPOST(body, 'login').subscribe(l=>console.log(JSON.stringify(l)))
  }

  signupMongoServer(authdata:AuthData){
    let body = authdata;
    this.cloudApiPOST(body, 'signup').subscribe(s=>console.log(JSON.stringify(s)))
  }


  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log('success');
      })
      .catch(err => this.toastr.showWarn('Login Err', err.message));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
