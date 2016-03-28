/// <reference path="../main.d.ts" />

import Property from '../model/Property'

const initialState : { [id: number] : Property } = {}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

