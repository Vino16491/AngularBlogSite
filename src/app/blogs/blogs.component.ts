import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {BlogDataService} from '../services/blog-data.service'
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
blogs = []
  constructor(private _authservice: AuthService, public blogdata: BlogDataService) { }

  ngOnInit() {
    this.blogsData();
    
  }

  blogsData(){
    let storyFromService = this.blogdata.userStory();
    // alert(storyFromService);
    if(storyFromService){
      this.blogs.push(storyFromService);
      console.log(storyFromService);
    }
  }

}
