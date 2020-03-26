import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
public allBlogs;

  constructor(public blogHttpService:BlogHttpService) { }

  ngOnInit() {
    
    console.log("Home component is called")
    //this.allBlogs=this.blogHttpService.getAllBlogs();

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data =>{
        console.log("logging data");
        console.log("data");
        this.allBlogs = data["data"];
      },

      error => {
        console.log("some error logged");
        console.log(error.errorMessage);
      }

      
    )
    
  
  }

  ngOnDestroy() {
    console.log("Home component destroy called ");
  }
}
