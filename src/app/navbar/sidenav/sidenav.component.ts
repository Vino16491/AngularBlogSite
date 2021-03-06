import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";

import { Subscription, Observable } from "rxjs";
import { AuthService } from "../../auth/auth.service";
/* Ngrx import */
import {Store} from '@ngrx/store';
import * as fromRoot from '../../app.reducer'
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();
  
  isAuth$ : Observable<boolean>;
  chips: string[] = ["Emotions", "Feelings", "Technology", "programming"];
  userDetail$: Observable<any>;
  user;
  constructor(private store : Store<fromRoot.State>, private authService: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
    this.userDetail$ = this.store.select(fromRoot.getAuthDetails);
    this.userDetail$.subscribe(u=>this.user = u);
  }
  onChipSelect(chip, index) {
    console.log(chip + " " + index);
    this.closeSideNav.emit();
  }
  onClose() {
    this.closeSideNav.emit();
  }

  logout(){
    this.authService.logout()
  }

  ngOnDestroy() {
    
  }
}
