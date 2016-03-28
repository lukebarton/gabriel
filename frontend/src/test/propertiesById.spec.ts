/// <reference path="../main.d.ts" />

import * as Chai from 'chai'
const expect = Chai.expect

import { reducer } from '../state/propertiesById'

describe('propertiesById reducer', () => {
  it('should return the initial state', function () {
    const initialState = reducer(undefined, {});

    expect(initialState).to.be.empty
  })
  it('returns state with empty action', function () {
    const oldState = reducer(undefined, {})
    const newState = reducer(oldState, {})

    expect(newState).to.equal(oldState)
  })

})
