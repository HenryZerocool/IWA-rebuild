import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as postActions from "../actions/post.actions";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {}
}
