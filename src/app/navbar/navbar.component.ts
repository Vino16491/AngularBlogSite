import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSideNavMenu;
  constructor(public _authservice: AuthService) { }

  ngOnInit() {

  }

  openSideNav(){
    if(this.showSideNavMenu === '0px'){
      this.showSideNavMenu = '250 px';
    }
  }
  closeSideNav(){
    
      this.showSideNavMenu = '0 px';
    
  }
}
