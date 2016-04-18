/// <reference path="../main.d.ts" />

import * as React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

class RequireAuthenticationComponent extends React.Component<any, any> {

  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth();
  }

  checkAuth() {
    if (!this.props.isAuthenticated) {
      let redirectAfterLogin = window.location.pathname;
      hashHistory.push(`/login?next=${redirectAfterLogin}`);
    }
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated === true
          ? this.props.children
          : null
        }
      </div>
    )

  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export const RequireAuthentication = connect(mapStateToProps)(RequireAuthenticationComponent)

export function requireAuthentication(Component) {
  return (
    <RequireAuthenticationComponent>
      {Component}
    </RequireAuthenticationComponent>
  )
}
