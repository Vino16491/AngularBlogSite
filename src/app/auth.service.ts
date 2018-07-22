import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthData(){
    // return this.http.get();
    return [
      {"userId":"aa@a.com", "password":"pass@123"},
      {"userId":"example@blog.com", "password":"pass@1234"},
    ]
  }
}
