/// <reference path="../main.d.ts" />

import * as Chai from 'chai'
const expect = Chai.expect

import { reducer } from '../state/search'
import { setSearchQuery, SET_SEARCH_QUERY } from '../actions/search'

describe('search actions', () => {
  describe('SetSearchQueryAction', () => {
    it('should create an action to set the search term', () => {
      const query = 'my string'
      const action = setSearchQuery(query)

      expect(action).to.have.property('type')
      expect(action.type).to.equal(SET_SEARCH_QUERY)
      expect(action).to.have.property('query')
      expect(action.query).to.equal(query)
    })
  })
})

describe('search reducer', () => {

  it('should return the initial state', function () {
    const state = reducer(undefined, {});

    expect(state).to.have.property('query')
  })

  it('returns state with empty action', function () {
    const oldState = reducer(undefined, {});
    const newState = reducer(oldState, {})

    expect(newState).to.equal(oldState)
  })

  it('handles SET_SEARCH_QUERY', () => {
    const query = 'my new searchterm'
    const action = setSearchQuery(query)
    const oldState = reducer(undefined, {});

    const newState = reducer(oldState, action)
    const expectedState = Object.assign({}, oldState, { query: query })

    expect(newState).to.not.equal(oldState)
    expect(newState).to.deep.equal(expectedState)
  })

})
