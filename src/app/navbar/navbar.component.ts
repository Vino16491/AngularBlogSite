import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription, Observable } from "rxjs";

/* NgRx import */
import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  chips: string[] = ["Emotions", "Feelings", "Technology", "programming"];
  
  isAuth$ : Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private authService:AuthService) {}

  ngOnInit() {
   this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }
  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    
  }
}
