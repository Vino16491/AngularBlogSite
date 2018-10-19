import {Action} from '@ngrx/store';

export const SET_AUTHENTICATED = "[Auth] Set Authenticated";
export const SET_UNAUTHENTICATED = "[Auth] Set UnAuthenticated";
export const SET_AUTHDETAILS = "[Auht] Set AuthDetails";
export class SetAuthenticated implements Action{
    readonly type = SET_AUTHENTICATED;
}

export class SetUnAuthenticated implements Action{
    readonly type = SET_UNAUTHENTICATED;
}

export class SetAuthDetails implements Action{
    readonly type = SET_AUTHDETAILS;
    constructor(public payload: any){};
}

export type AuthActions = SetAuthenticated | SetUnAuthenticated | SetAuthDetails;