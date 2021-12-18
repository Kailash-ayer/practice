import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';
import { BlogService } from './blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogModel: any={};
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.blogService.register(this.blogModel).subscribe(data =>{
 
    })
     console.log(this.blogModel);
   }

}
