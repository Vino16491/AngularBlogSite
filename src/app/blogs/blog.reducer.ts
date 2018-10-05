import { SET_BLOGS, BlogAction } from "./blog.actions";

export interface BlogState {
  blogs: [{title: string; _id: string; story: string;}];
}

const initialState: BlogState = {
  blogs: [{title: "", _id: "", story: ""}]
};

export function blogReducer(state = initialState, action: BlogAction) {
  if (action.type == SET_BLOGS) {
    console.log(JSON.stringify(action.payload) + "userproducts");
    return state.blogs = action.payload ;
  }
  return state;
}

export const getBlogs = (state:BlogState)=>state;
