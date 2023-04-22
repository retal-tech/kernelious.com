import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {config} from "./app.config";
import {catchError, retry} from "rxjs/operators";

export interface listPostInterface {
  count: number,
  next: number,
  previous: number,
  results: [
    {
      title: string,
      subtitle: string,
      slug: string,
      body: string,
      meta_description: string,
      date_created: string,
      publish_date: string,
      author_name:  string,
      image:  string,
      tags: [
        {
          name: string
        }
      ]
    }
  ]
}

export interface PostInterface {
  title: string,
  subtitle: string,
  slug: string,
  body: string,
  meta_description: string,
  date_created: string,
  publish_date: string,
  author_name:  string,
  image:  string,
  tags: [
    {
      name: string
    }
    ]
}


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public get_recent_post(){
    return this.http.get<listPostInterface>(`${config.backend_url}/api/blog/posts/recent_posts/`).pipe(
        retry(3),
        catchError((this.handleError))
    )
  }

  public get_post_by_slug(slug:string) {
    return this.http.get<PostInterface>(`${config.backend_url}/api/blog/posts/${slug}/`).pipe(
        retry(3),
        catchError(this.handleError)
    )
  }

}
