import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, PostAdapter, PostState } from "../states/app.state";

export const getAllPost = createFeatureSelector<PostState>("post");

//const  selectAll  = PostAdapter.getSelectors(getAllPost);

//Dictionary {K : Dictionary<Post>, V: Post[]}
const { selectEntities, selectAll } = PostAdapter.getSelectors(getAllPost);

export const selectAllPost = selectAll;

export const selectPost = id =>
  createSelector(
    getAllPost,
    selectPosts => selectPosts[id]
  );
