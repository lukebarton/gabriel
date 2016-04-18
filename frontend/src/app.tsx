/// <reference path="./main.d.ts" />

import 'es6-shim'
import * as _ from 'underscore'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import * as injectTapEventPlugin from 'react-tap-event-plugin/src/injectTapEventPlugin';

import * as state from './state'

import App from './containers/App';
import Property from './model/Property'
import './css/main.css';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const dummyState = {
  propertiesById: {},
  auth: { isAuthenticated: false }
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
