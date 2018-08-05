import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  chips: string[] = ["Emotions", "Feelings", "Technology", "programming"];
  authSubscription: Subscription;
  isAuth = false;

  constructor(public _authservice: AuthService) {}

  ngOnInit() {
    this.authSubscription = this._authservice.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }
  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
