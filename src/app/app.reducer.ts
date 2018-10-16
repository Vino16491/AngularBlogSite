import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromAuth from "./auth/auth.reducer";
import * as fromUi from "./sharedUI/ui.reducer";

/* For blogs */
import * as fromBlogs from "./blogs/blog.reducer"
 export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
  blogs:fromBlogs.State[];
  
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
  blogs:fromBlogs.blogReducer
  
};

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

/* For Blogs */
export const getBlogsState = createFeatureSelector<fromBlogs.State>("blogs");
export const getBlogs = createSelector(getBlogsState, fromBlogs.getBlogs);

/* For Ui Loading */
export const getUiState = createFeatureSelector<fromUi.State>("ui");
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
