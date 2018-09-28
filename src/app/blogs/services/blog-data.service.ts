import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
public blogStory;
  constructor() { }


  addUserStory(blogstory){

    this.blogStory = blogstory;
  }

  userStory(){
    if(this.blogStory != undefined && this.blogStory != null){
      return this.blogStory;
    }else{
      return false;
    }
    
  }
}


