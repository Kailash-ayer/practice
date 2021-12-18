import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url='';
  constructor(private http: HttpClient) { }

  register(blog:Blog){
  return this.http.post<any>(this.url,blog);
  }
}
