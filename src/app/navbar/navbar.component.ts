import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>()
  chips: string[] = [
    'Emotions', 'Feelings', 'Technology', 'programming'
  ];
  constructor(public _authservice: AuthService) { }


  ngOnInit() {

  }
  onToggleSideNav() {
    this.sidenavToggle.emit()
  }
}
