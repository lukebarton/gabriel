/// <reference path="../main.d.ts" />

export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS'

export class AuthenticateSuccessAction {
  type: string = AUTHENTICATE_SUCCESS
  constructor(public authenticatedUser : any) {}
}
