import { Component, OnInit } from '@angular/core';
import {BlogDataService} from '../services/blog-data.service'
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
public userStory:{};
  constructor(public blogService: BlogDataService) { }

  ngOnInit() {
  }

  saveStory(){
    this.blogService.addUserStory(this.userStory)
  }

}
