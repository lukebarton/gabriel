/// <reference path="../main.d.ts" />

import { combineReducers } from 'redux'
import * as search from './search'
import * as propertiesById from './propertiesById'

export const reducer = (state, action) => combineReducers({
  propertiesById: propertiesById.reducer,
  search: search.reducer
})(state, action)
