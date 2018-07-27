import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../services/blog-data.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  public userStory;
  public userStoryTitle;
  editorConfig: AngularEditorConfig = {
    defaultFontName:'Roboto',
    // showToolbar:false,
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Your Story Here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "storyStyle",
        tag:"div"
      },
      {
        name: 'redText',
        class: 'storyStyle',
        tag:"div"
      },
      {
        name: "titleText",
        class: "storyStyle",
        tag: "h1",
      },
    ]
  };

  // myGroup = new FormGroup(){

  // }
  constructor(public blogService: BlogDataService, public router: Router) { }

  ngOnInit() {
  }

  saveStory() {
    if (this.userStoryTitle){
      if (this.userStory !== undefined && this.userStory !== null && this.userStory) {
        if (this.userStory.length > 50) {
          let userFullStory = {
            "title": this.userStoryTitle,
            "story": this.userStory
          }
          this.blogService.addUserStory(userFullStory);
          this.userStory = null;
          this.userStoryTitle = null;
          this.router.navigate(['blogs']);

        } else {
          alert("story should be more than 50 char" + "Your story is only " + this.userStory.length + ' char')
        }
      }
    }else if (this.userStoryTitle == null || this.userStoryTitle){
      alert("Please provide some title to your story");
    }
      


  }

}
