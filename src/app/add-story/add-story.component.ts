import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
// import { ReactiveFormsModule  } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
// import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  public userStory;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  // myGroup = new FormGroup(){

  // }
  constructor(public blogService: BlogDataService) { }

  ngOnInit() {
  }

  saveStory() {
    this.blogService.addUserStory(this.userStory)
  }

}
