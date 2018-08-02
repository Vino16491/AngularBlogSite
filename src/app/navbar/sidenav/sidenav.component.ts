import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter<void>();

  chips: string[] = [
    'Emotions', 'Feelings', 'Technology', 'programming'
  ];
  constructor() { }

  ngOnInit() {
  }
  onChipSelect(chip, index) {
    console.log(chip + ' ' + index);
    this.closeSideNav.emit();
  }
  onClose(){
    this.closeSideNav.emit();
  }
}
