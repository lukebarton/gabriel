/// <reference path="../main.d.ts" />

import * as Chai from 'chai'
const expect = Chai.expect

import { AuthenticateSuccessAction, AUTHENTICATE_SUCCESS } from '../actions/auth'
import { AuthStateReducer } from "../state/auth";

describe('authentication actions', () => {
  describe('AuthenticateSuccessAction', () => {
    it('should create an action to authenticate a user', () => {
      const authenticatedUser = {}
      const action = new AuthenticateSuccessAction(authenticatedUser)

      expect(action).to.have.property('type')
      expect(action.type).to.equal(AUTHENTICATE_SUCCESS)
      expect(action).to.have.property('authenticatedUser')
      expect(action.authenticatedUser).to.equal(authenticatedUser)
    })
  })
})

describe('auth AuthStateReducer', () => {

  it('should return the initial state', function () {
    const state = AuthStateReducer(undefined, {});

    expect(state).to.have.property('isAuthenticated', false)
    expect(state).to.have.property('user', undefined)
  })

  it('returns state with empty action', function () {
    const oldState = AuthStateReducer(undefined, {});
    const newState = AuthStateReducer(oldState, {})

    expect(newState).to.equal(oldState)
  })

  it('handles AUTHENTICATE_SUCCESS', () => {
    const oldState = AuthStateReducer(undefined, {})

    const authenticatedUser = {}
    const action = new AuthenticateSuccessAction(authenticatedUser)
    const newState = AuthStateReducer(oldState, action)

    expect(newState).to.not.equal(oldState)
    expect(newState.user).to.equal(authenticatedUser)
    expect(newState.isAuthenticated).to.equal(true);
  })

})
