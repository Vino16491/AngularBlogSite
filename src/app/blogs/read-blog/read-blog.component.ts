import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-read-blog",
  templateUrl: "./read-blog.component.html",
  styleUrls: ["./read-blog.component.css"]
})
export class ReadBlogComponent implements OnInit {
  blog;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(blog => {
      console.log(JSON.stringify(blog));
      this.blog = blog;
    });
  }
}
