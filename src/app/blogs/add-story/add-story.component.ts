import { Component, OnInit } from "@angular/core";
import { BlogDataService } from "../services/blog-data.service";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Router } from "@angular/router";
import { SharedService } from "../../shared-service.service";
@Component({
  selector: "app-add-story",
  templateUrl: "./add-story.component.html",
  styleUrls: ["./add-story.component.css"]
})
export class AddStoryComponent implements OnInit {
  photo = [];
  storyImage;
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
    // uploadUrl: '', // if needed
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

  constructor(
    public blogService: BlogDataService,
    public router: Router,
    private toast: SharedService
  ) {}

  ngOnInit() {
    this.searchImage("beauty");
  }

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
            author: this.author ? this.author : "Anonymous",
            imageUrl:this.storyImage?this.storyImage:null
          };
          this.blogService.addUserStory(userFullStory);
          this.userStory = null;
          this.userStoryTitle = null;
          this.toast.showSuccess("Story added successfully");
          this.router.navigate(["blogs"]);
        } else {
          this.toast.showInfo(
            "Story Size",
            "story should be more than 50 char" +
              "Your story is only " +
              this.userStory.length +
              " char"
          );
        }
      }
    } else if (this.userStoryTitle == null || this.userStoryTitle) {
      this.toast.showWarn(
        "title is missing",
        "Please provide some title to your story"
      );
    }
  }

  searchImage(searchString) {
    searchString = "beauty";
    this.blogService
      .searchPhoto(searchString)
      .subscribe(
        (photo: {
          title;
          imageResult: {
            photos: [{ id:string; src: { medium?: string; small?: string } }];
          };
        }) => {
          photo.imageResult.photos.forEach(p => {
            this.photo.push({
              id:p.id,
              url: p.src.medium ? p.src.medium : p.src.small
            });
          });

          console.log(JSON.stringify(this.photo))
        }
      );
  }

  addImage(photoid, photourl){
    // return this.storyImage = {id:photoid, url: photourl};
    return this.storyImage = photourl;

  }
}
