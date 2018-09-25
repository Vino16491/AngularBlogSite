import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { BlogDataService } from "../services/blog-data.service";
@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {
  
  constructor(
    private _authservice: AuthService,
    public blogdata: BlogDataService
  ) {}
  
  ngOnInit() {
    this.blogsData();
  }

  blogsData() {
  }
}
