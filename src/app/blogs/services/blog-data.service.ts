import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogDataService {
  public blogStory;
  constructor(private http: HttpClient) {}

  cloudApi(body, apiname) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const url = `http://localhost:5000/blog-9e6be/us-central1/blogapi/${apiname}`;
    return this.http.post(url, body, { headers });
  }


  addUserStory(blogstory) {
    const body = JSON.stringify(blogstory);
    return this.cloudApi(body, "addstory").subscribe(s => {
      console.log(JSON.stringify(s));
    });
  }

  userStory() {
    if (this.blogStory != undefined && this.blogStory != null) {
      return this.blogStory;
    } else {
      return false;
    }
  }
}
