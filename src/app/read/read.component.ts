import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";

import { AppState } from "../states/app.state";
import { Post } from "../models/post.model";
import * as postActions from "../actions/post.actions";
import { selectAllPost } from "../selectors/posts.selector";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
    this.posts = store.select("post");
    // this.posts = this.store.select("post");
  }

  ngOnInit() {
    this.store.dispatch(new postActions.GetPost());
    this.store.subscribe(post => console.log("post ts", post.post));
    this.posts = this.store.select(selectAllPost);
  }
}
