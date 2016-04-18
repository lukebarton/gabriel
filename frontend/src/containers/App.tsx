/// <reference path="../main.d.ts" />

import * as React from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'

import PropertySearchPage from '../containers/PropertySearchPage'
import PropertyPage from '../containers/PropertyPage'
import LoginPage from '../containers/LoginPage'
import SearchBox from '../containers/SearchBox'
import {RequireAuthentication} from '../containers/AuthenticatedComponent'

import AppBar from 'material-ui/lib/app-bar';

const mapStateToProps = (state) => {
  return {
    user: false
  }
}

export class App extends React.Component<any, any> {
  render() {
    const { user } = this.props
    const searchBox = user ? <SearchBox /> : undefined

    return (
      <div>
        <RequireAuthentication>
          <AppBar title="St Gabriel"/>
          <SearchBox/>
        </RequireAuthentication>
        <Router history={hashHistory}>
          <Route path="/login" component={LoginPage}/>
          <Route path="/search" component={PropertySearchPage}/>
          <Route path="/property/:propertyId" component={PropertyPage}/>
        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
