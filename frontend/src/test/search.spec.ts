/// <reference path="../main.d.ts" />

import * as Chai from 'chai'
const expect = Chai.expect

import { SearchStateReducer } from '../state/search'
import { SetSearchQuery, SET_SEARCH_QUERY } from '../actions/search'

describe('search actions', () => {
  describe('SetSearchQueryAction', () => {
    it('should create an action to set the search term', () => {
      const query = 'my string'
      const action = new SetSearchQuery(query)

      expect(action).to.have.property('type')
      expect(action.type).to.equal(SET_SEARCH_QUERY)
      expect(action).to.have.property('query')
      expect(action.query).to.equal(query)
    })
  })
})

describe('search SearchStateReducer', () => {

  it('should return the initial state', function () {
    const state = SearchStateReducer(undefined, {});

    expect(state).to.have.property('query')
  })

  it('returns state with empty action', function () {
    const oldState = SearchStateReducer(undefined, {});
    const newState = SearchStateReducer(oldState, {})

    expect(newState).to.equal(oldState)
  })

  it('handles SET_SEARCH_QUERY', () => {
    const query = 'my new searchterm'
    const action = new SetSearchQuery(query)
    const oldState = SearchStateReducer(undefined, {});

    const newState = SearchStateReducer(oldState, action)
    const expectedState = Object.assign({}, oldState, { query: query })

    expect(newState).to.not.equal(oldState)
    expect(newState).to.deep.equal(expectedState)
  })

})
