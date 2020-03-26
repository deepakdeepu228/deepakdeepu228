import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author": "Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },
    {
      "blogId": "2",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author": "Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 2"
    },
    {
      "blogId": "3",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author": "Admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 3"
    }

  ]
   
  constructor() {
    console.log("service is called");
   }

   public getAllBlogs(): any {

      return this.allBlogs; 

   }

   public getsingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }

    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
