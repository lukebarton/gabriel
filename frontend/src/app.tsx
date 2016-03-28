/// <reference path="./main.d.ts" />

import 'es6-shim'
import * as _ from 'underscore'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';

import * as state from './state'

import Property from './model/Property'


const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const dummyState = {
  propertiesById: {}
}
_.range(1,712).map((value) => {
  let property : Property = {
    id: value,
    name: `${value} St George Wharf, SW8 ${value}LR`
  }
  dummyState.propertiesById[value] = property;
})

const store = finalCreateStore(state.reducer, dummyState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
