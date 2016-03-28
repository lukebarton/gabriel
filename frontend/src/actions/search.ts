/// <reference path="../main.d.ts" />

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export const setSearchQuery = (query : string) => {
  return {
    type: SET_SEARCH_QUERY,
    query
  }
}
