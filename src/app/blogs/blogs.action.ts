import {Action} from '@ngrx/store';

export const SET_BLOGS = "[Blogs] Set Blogs";

export class SetBlogs implements Action{
    readonly type = SET_BLOGS;
    constructor(public payload:any){}
    
}

export type BlogActions = SetBlogs;