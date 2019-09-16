import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts = (): Observable<Post[]> => {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    ) as Observable<Post[]>;
  };
}
