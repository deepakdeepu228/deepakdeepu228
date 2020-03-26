import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from './iblog';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
  public authToken = 'MjJkY2FkMzc3YTBiNjU0ZGIzODgxMTFiMjgwNzIxM2QzZDZkNjkyMzc0YTA1N2IwNzlmM2MzZjlkYjdkZmJlYWRhY2UwNDFlOTA5ZTlkNDQ5MTk4ZWJiZTA2ZmVhOWQ0YjUxM2UzZjk5NTY3ZTJmN2FhODNiZjIzNTZhYjJjYmIzZg==';

  constructor( private http: HttpClient) {
    console.log("bloghttp service has been called");

   }

   public getAllBlogs(): Observable<IBlog[]>{

    let myResponse = this.http.get<IBlog[]>(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

   }

   public getSingleBlogInformation(currentBlogID): any {
      let myResponse = this.http.get(this.baseUrl + '/view' + '/' + currentBlogID + '?authToken=' + this.authToken);
      return myResponse;
   }

   public createBlog(blogData): any {
     let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
     return myResponse;
   }

   public deleteBlog(blogId): any {
     let data = {};
     let myResponse = this.http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
     return myResponse;
   }

   public editBlog(blogId, blogData): any {
     let myResponse = this.http.post(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;
    }
}
