import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs'
/* Ngrx Import */
import { Store } from "@ngrx/store";
import * as fromRoot from "../../app.reducer";
@Component({
  selector: "app-read-blog",
  templateUrl: "./read-blog.component.html",
  styleUrls: ["./read-blog.component.css"]
})
export class ReadBlogComponent implements OnInit {
  readblog$ : Observable<any>;
  readBlogs;
  constructor(private route: ActivatedRoute, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.readblog$ = this.store.select(fromRoot.getBlogs)
    this.readblog$.subscribe(blog=> this.readBlogs = blog )
    this.route.params.subscribe(id => {
      if(this.readBlogs){
        console.log(JSON.stringify(this.readBlogs))
      }
     
      
      // this.blog = blog;
    });
  }
}
