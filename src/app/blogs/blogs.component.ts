import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { BlogDataService } from "../services/blog-data.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {
  
  constructor(
    private _authservice: AuthService,
    public blogdata: BlogDataService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.blogsData();
  }

  blogsData() {
  }

  readBlog(){
    this.router.navigate(['readblog']);
  }

}
