import {Action} from '@ngrx/store';

export const SET_BLOGS = "[Blog] Set Blog";

export class SetBlog implements Action{
    readonly type = SET_BLOGS;
    constructor(public payload:any){}
}

export type BlogAction = SetBlog;