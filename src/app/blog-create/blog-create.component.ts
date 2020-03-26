import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor( private blogHttpservice: BlogHttpService, private activatedroute: ActivatedRoute, private router:Router ) { 

  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogcategory: string;
  public possibleCategories = ["comedy", "Drama", "Action", "Technology"];


  ngOnInit() {
  }

    public createBlog(): any {
        let blogData = {
          title: this.blogTitle,
          description: this.blogDescription,
          blogbody: this.blogBodyHtml,
          category: this.blogcategory
        }
        console.log(blogData);
        this.blogHttpservice.createBlog(blogData).subscribe(
          data =>{
            console.log("Blog Created");
            console.log(data);
            // alert('Blog posted successfully');
            setTimeout( () => {
              this.router.navigate(['/blog', data.data.blogId]);
            }, 1000)
          },
          error => {
            console.log("some error occured");
            console.log(error.errorMessage);
            alert("some error occured");
          }

          
        )
    
      }

}
