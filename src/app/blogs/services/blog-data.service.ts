import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogDataService {
  public blogStory;
  constructor(private http: HttpClient) {}

  cloudPOSTApi(body, apiname) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const url = `http://localhost:5000/blog-9e6be/us-central1/blogapi/${apiname}`;
    return this.http.post(url, body, { headers });
  }

  cloudGETApi(apiname) {
    const headers = new HttpHeaders({ "Content-type": "application/json" });
    const url = `http://localhost:5000/blog-9e6be/us-central1/blogapi/${apiname}`;
    return this.http.get(url, { headers });
  }
  /* Save user story to database */
  addUserStory(blogstory) {
    const body = JSON.stringify(blogstory);
    return this.cloudPOSTApi(body, "addstory").subscribe(s => {
      console.log(JSON.stringify(s));
    });
  }

  /* Read user story */
  userStory() {
    this.cloudGETApi("blog").subscribe(r => {
      console.log(JSON.stringify(r));
    });
  }
}
