import { Component, OnInit } from "@angular/core";
import { BlogDataService } from "../services/blog-data.service";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Router } from "@angular/router";
import {SharedServiceService} from "../../shared-service.service"
@Component({
  selector: "app-add-story",
  templateUrl: "./add-story.component.html",
  styleUrls: ["./add-story.component.css"]
})
export class AddStoryComponent implements OnInit {
  public userStory;
  public userStoryTitle;
  author;
  /* Editor Config */
  editorConfig: AngularEditorConfig = {
    defaultFontName: "Calibri",
    editable: true,
    spellcheck: true,
    placeholder: "Your Story Here...",
    translate: "no",
    defaultFontSize: "6",
    enableToolbar: true,
    showToolbar: true,
    // uploadUrl: 'v1/images', // if needed
    customClasses: [
      // optional
      {
        name: "quote",
        class: "storyStyle",
        tag: "div"
      },
      {
        name: "redText",
        class: "storyStyle",
        tag: "div"
      },
      {
        name: "titleText",
        class: "storyStyle",
        tag: "h1"
      }
    ]
  };

  constructor(public blogService: BlogDataService, public router: Router, private toast:SharedServiceService) {}

  ngOnInit() {}

  saveStory() {
    
    
    if (this.userStoryTitle) {
      if (
        this.userStory !== undefined &&
        this.userStory !== null &&
        this.userStory
      ) {
        if (this.userStory.length > 50) {
          let userFullStory = {
            title: this.userStoryTitle,
            story: this.userStory,
            author: this.author ? this.author : "Anonymous"
          };
          this.blogService.addUserStory(userFullStory);
          this.userStory = null;
          this.userStoryTitle = null;
          this.router.navigate(["blogs"]);
        } else {
          this.toast.showInfoMessage(
            "story should be more than 50 char" +
              "Your story is only " +
              this.userStory.length +
              " char"
          );
        }
      }
    } else if (this.userStoryTitle == null || this.userStoryTitle) {
     this.toast.showWarnMessage('Please provide some title to your story')
    }
  }

}
