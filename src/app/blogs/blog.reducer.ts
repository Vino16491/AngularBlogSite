import { Action } from "@ngrx/store";
import {
  BlogActions,
  SET_BLOGS
} from "./blogs.action";

export interface State {
  _id:string;
  title:string;
  story:string;
}

const initialState: State [] = [];

export function authReducer(state = initialState, action: BlogActions) {
if(action.type == SET_BLOGS){
    return action.payload;
}
return state; 

}


export const getBlogs = (state: State) => state;