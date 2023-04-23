import {Component, Injectable} from '@angular/core';
import {BlogService, listPostInterface} from "../blog.service"
import {config} from '../app.config'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {
  title = 'kernelious';
  blogs = {} as listPostInterface;
  src_path = config.backend_url

  constructor(private home: BlogService) { }

  ngOnInit() {
    this.home.get_recent_post().subscribe((e) => {
      this.blogs = e
    })
  }
}
