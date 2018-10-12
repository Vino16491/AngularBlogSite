import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css']
})
export class PassresetComponent implements OnInit {
  PassResetForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.PassResetForm = new FormGroup({
      emailId: new FormControl("", {
        validators: [Validators.required, Validators.email]
      }),
    
    });
  }

}
