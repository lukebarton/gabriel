/// <reference path="../main.d.ts" />

import { AUTHENTICATE_SUCCESS } from "../actions/auth";

export class AuthState {
  public user : any = undefined
  public isAuthenticated : boolean = false
}

export const AuthStateReducer = function(state : AuthState = new AuthState, action) : AuthState {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        user: action.authenticatedUser,
        isAuthenticated: true,
        'aa': 'aa'
      })
    default:
      return state
  }
}
