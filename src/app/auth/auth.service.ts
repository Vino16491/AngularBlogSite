import { Subject } from "rxjs";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  registeredUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    console.log(JSON.stringify(this.user));
    console.log(this.user.email != null && this.user.email != "");
    console.log(
      this.user.userId != null &&
        (this.user.email != null && this.user.email != "")
    );
    if (
      this.user.userId != null &&
      (this.user.email != null && this.user.email != "")
    ) {
      return true;
    }
    return false;
  }
}
