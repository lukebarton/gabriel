/// <reference path="../main.d.ts" />

import { combineReducers } from 'redux'
import { SearchStateReducer, SearchState } from './search'
import { PropertiesByIdState, PropertiesByIdStateReducer } from './propertiesById'
import { AuthStateReducer, AuthState } from './auth'

export class State {
  constructor(
    public propertiesById : PropertiesByIdState = new PropertiesByIdState,
    public search : SearchState = new SearchState,
    public auth : AuthState = new AuthState
  ) {}
}

export const reducer = (state, action) => combineReducers({
  propertiesById: PropertiesByIdStateReducer,
  search: SearchStateReducer,
  auth: AuthStateReducer
})(state, action)
