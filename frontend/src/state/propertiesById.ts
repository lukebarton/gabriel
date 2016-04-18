/// <reference path="../main.d.ts" />

import Property from '../model/Property'

export class PropertiesByIdState {
  [id: number] : Property
}

export const PropertiesByIdStateReducer = function (state : PropertiesByIdState = new PropertiesByIdState, action) {
  switch (action.type) {
    default:
      return state
  }
}

