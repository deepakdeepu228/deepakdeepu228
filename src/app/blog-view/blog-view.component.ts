import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;


  constructor( private _route: ActivatedRoute, private router: Router,public blogService:BlogService, public blogHttpService: BlogHttpService) { 
    console.log("Constucter has been called")
  }

  ngOnInit() {
    console.log("ngOnit has been called");

    let myBlogId = this._route.snapshot.paramMap.get('blogId');

    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error message");
        console.log(error.errorMessage);
      }
    )


  }

  public deleteThisBlog(): any {
     this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
       data => {
         console.log(data);
          alert("deleted");
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000)
       },
       error =>{
         console.log("some Error");
         console.log("error.errorMessage");
         
       }
     )
  }

  

}
