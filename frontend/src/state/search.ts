/// <reference path="../main.d.ts" />

const initialState = {
  query: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return Object.assign({}, state, { query: action.query })
    default:
      return state
  }
}
