import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromAuth from "./auth/auth.reducer";
import * as fromBlogs from "./blogs/blog.reducer";

export interface State {
  auth: fromAuth.State;
  blogs: fromBlogs.BlogState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  blogs: fromBlogs.blogReducer
};

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

/** @const getBlogState to fetch blogs data  */
export const getBlogState = createFeatureSelector<fromBlogs.BlogState>("blog");
export const getBlogs = createSelector(getBlogState, fromBlogs.getBlogs);