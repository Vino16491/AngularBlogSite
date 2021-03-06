import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { BlogDataService } from "./services/blog-data.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import * as blogs from '../blogs/blogs.action'
export interface Idata {
  message: "";
  blog: ArrayConstructor;
}
@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {
  blogs;
  constructor(
    private _authservice: AuthService,
    public blogdata: BlogDataService,
    private router: Router,
    private store: Store<fromRoot.State>,
    
  ) {}

  ngOnInit() {
    this.blogsData();
  }

  blogsData() {
    this.blogdata.userStory().subscribe((blog: Idata) => {
      this.store.dispatch(new blogs.SetBlogs(blog.blog));
      console.log(blog.blog)
      return (this.blogs = blog.blog);
    });
    // console.log(this.blogs);
  }

  readBlog(id) {
    this.router.navigate(["readblog", {id}]);
  }
}
