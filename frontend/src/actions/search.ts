/// <reference path="../main.d.ts" />

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export class SetSearchQuery {
  type: string = SET_SEARCH_QUERY
  constructor(public query : string) {}
}
