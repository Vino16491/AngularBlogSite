import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BlogDataService } from '../services/blog-data.service'
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs = [{
    title: 'Hero 1',
    story: ''
  },
  {
    title: 'Hero 2',
    story: ''
  },
  {
    title: 'Hero 3',
    story: ''
  },
  {
    title: 'Hero 4',
    story: ''
  },
  {
    title: 'Hero 5',
    story: ''
  },
  {
    title: 'Hero 6',
    story: ''
  }]
  constructor(private _authservice: AuthService, public blogdata: BlogDataService) { }

  ngOnInit() {
    this.blogsData();

  }

  blogsData() {
    let storyFromService = this.blogdata.userStory();
    if (storyFromService) {
      this.blogs.push(storyFromService);
      console.log(JSON.stringify(storyFromService));
    } else {
      console.log(storyFromService + 'no data found')
    }
  }

}
