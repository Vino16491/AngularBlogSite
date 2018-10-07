import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
/* Ngrx Import */
import { Store } from "@ngrx/store";
import * as fromRoot from "../../app.reducer";
import { take } from "rxjs/operators";
@Component({
  selector: "app-read-blog",
  templateUrl: "./read-blog.component.html",
  styleUrls: ["./read-blog.component.css"]
})
export class ReadBlogComponent implements OnInit {
  readblog$: Observable<any>;
  readBlogs;
  readStory;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.readblog$ = this.store.select(fromRoot.getBlogs).pipe(take(1));
    this.readblog$.subscribe(b => {
      this.readBlogs = b;
      this.route.params.subscribe(id => {
        let readBlogId = id;
        this.readStory = this.readBlogs.find(readingblog => readingblog._id == readBlogId.id);
      });
    });

    // this.blog = blog;
  }
}
