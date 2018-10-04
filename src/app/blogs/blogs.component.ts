import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { BlogDataService } from "./services/blog-data.service";
import { Router } from "@angular/router";
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
    private router: Router
  ) {}

  ngOnInit() {
    this.blogsData();
  }

  blogsData() {
    this.blogdata.userStory().subscribe((blog: Idata) => {
      return (this.blogs = blog.blog);
    });
    // console.log(this.blogs);
  }

  readBlog() {
    this.router.navigate(["readblog"]);
  }
}
