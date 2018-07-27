import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
public blogStory = [];
  constructor() { }


  addUserStory(blogstory){
    this.blogStory.push(blogstory);
  }

  userStory(){
    return this.blogStory;
  }
}


