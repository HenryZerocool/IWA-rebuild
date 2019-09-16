import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Post } from "./../models/post.model";

export const ADD_POST = "[POST] Add";
export const GET_POST = "[POST] Get";
export const GET_POST_SUCESS = "[POST] Get sucess";
export const GET_POST_FAIL = "[POST] Get fail";

export class AddPost implements Action {
  readonly type = ADD_POST;
  constructor(public payload: Post) {}
}

export class GetPost implements Action {
  readonly type = GET_POST;
  constructor() {}
}
export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCESS;
  constructor(public payload: Post[]) {}
}
export class GetPostFail implements Action {
  readonly type = GET_POST_FAIL;
  constructor(public payload: string) {}
}

export type Action = AddPost | GetPost | GetPostSuccess | GetPostFail;
