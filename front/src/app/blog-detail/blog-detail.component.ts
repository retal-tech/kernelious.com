import { Component } from '@angular/core';
import {BlogService, PostInterface, listPostInterface} from "../blog.service";
import {Router} from "@angular/router";
import {config} from "../app.config";


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blog = {} as PostInterface
  recent_blog = {} as listPostInterface
  src_pre = config.backend_url

  constructor(private router:Router ,private blog_service: BlogService) { }

  ngOnInit() {
    let slug = this.router.url.split('/')[2]
    console.log(slug)

    this.blog_service.get_post_by_slug(slug).subscribe((e) => {
      this.blog = e
    })

    this.blog_service.get_recent_post().subscribe((e) => {
      this.recent_blog = e
    })


  }

}
