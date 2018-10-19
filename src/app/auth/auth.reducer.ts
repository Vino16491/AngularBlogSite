import { Action } from "@ngrx/store";
import {
  AuthActions,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_AUTHDETAILS
} from "./auth.actions";

export interface State {
  isAuthenticated: boolean;
  authdetails?:{firstname:string; _id:string};
}

const initialState: State = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { isAuthenticated: true };

    case SET_UNAUTHENTICATED:
      return { isAuthenticated: false };

    case SET_AUTHDETAILS:
      return {isAuthenticated:true, authdetails:action.payload};

    default: {
      return state;
    }
  }
}


export const getIsAuth = (state: State) => state.isAuthenticated;
export const getAuthDetails = (state: State) => state.authdetails;