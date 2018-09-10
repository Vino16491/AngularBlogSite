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
@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.router.navigate(["/blogs"]);
      } else {
        this.store.dispatch(new Auth.SetUnAuthenticated());
        this.router.navigate(["/login"]);
      }
    });
  }
  registeredUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(JSON.stringify(result.user));
      })
      .catch(err => console.log(err));
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(JSON.stringify(result.user));
      })
      .catch(err => console.log(err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
