import { Subject } from "rxjs";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Router } from "@angular/router";

import { Injectable } from "@angular/core";
/* ngrx ........... */
import * as fromRoot from "../app.reducer";
import * as Auth from "./auth.actions";
@Injectable()
export class AuthService {
  
  
  constructor(private router: Router) {}

  initAuthListener() {}
  registeredUser(authData: AuthData) {
    
  }

  login(authData: AuthData) {}

  logout() {}
}
