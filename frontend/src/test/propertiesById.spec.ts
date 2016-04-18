/// <reference path="../main.d.ts" />

import * as Chai from 'chai'
const expect = Chai.expect

import { PropertiesByIdStateReducer } from '../state/propertiesById'

describe('propertiesById reducer', () => {
  it('should return the initial state', function () {
    const initialState = PropertiesByIdStateReducer(undefined, {});

    expect(initialState).to.be.empty
  })
  it('returns state with empty action', function () {
    const oldState = PropertiesByIdStateReducer(undefined, {})
    const newState = PropertiesByIdStateReducer(oldState, {})

    expect(newState).to.equal(oldState)
  })

})
