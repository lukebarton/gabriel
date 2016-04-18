/// <reference path="../main.d.ts" />

import State from "../lib/State";

export class SearchState extends State {
  public query : string = ''
}

export const SearchStateReducer = function (state : SearchState = new SearchState, action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      const newState = state.clone();
      newState.query = action.query;
      return newState
    default:
      return state
  }
}
