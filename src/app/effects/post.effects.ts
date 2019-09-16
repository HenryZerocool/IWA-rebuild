import { Injectable } from "@angular/core";
import { Observable, of, pipe } from "rxjs";
import { map, mergeMap, catchError, switchMap } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";

import { PostsService } from "../services/posts.service";
import * as postActions from "../actions/post.actions";
import { Post } from "../models/post.model";

// import {  } from "module";

@Injectable()
export class PostEffect {
  constructor(private action$: Actions, private postService: PostsService) {}

  @Effect()
  loadPosts$ = (): Observable<Action> =>
    this.action$.pipe(
      ofType<postActions.GetPost>(postActions.GET_POST),
      mergeMap((actions: postActions.GetPost) =>
        this.postService.getPosts().pipe(
          map((posts: Post[]) => new postActions.GetPostSuccess(posts)),
          catchError(err => of(new postActions.GetPostFail(err)))
        )
      )
    );
}
