import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();
  authSubscription: Subscription;
  isAuth = false;
  chips: string[] = ["Emotions", "Feelings", "Technology", "programming"];
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }
  onChipSelect(chip, index) {
    console.log(chip + " " + index);
    this.closeSideNav.emit();
  }
  onClose() {
    this.closeSideNav.emit();
  }
}
