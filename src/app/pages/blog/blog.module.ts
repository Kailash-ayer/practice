import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ]
})
export class BlogModule { }
