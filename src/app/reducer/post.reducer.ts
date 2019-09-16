import { Action } from "@ngrx/store";
import { Post } from "./../models/post.model";
import * as PostActions from "./../actions/post.actions";
import { PostAdapter, PostState, PostInitialState } from "../states/app.state";

const initialState: Post = {
  userId: 1,
  title: "default",
  body: "initial"
};

export function reducer(
  state: PostState = PostInitialState,
  action: PostActions.Action
) {
  switch (action.type) {
    case PostActions.ADD_POST:
      return { ...state };
    case PostActions.GET_POST_SUCESS:
      return PostAdapter.addMany(action.payload, { ...state });
    default:
      return state;
  }
}
