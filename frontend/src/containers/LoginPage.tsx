/// <reference path="../main.d.ts" />

import * as React from 'react'

import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import RaisedButton from 'material-ui/lib/raised-button';


export class LoginPage extends React.Component<any, any> {
  static propTypes = {
    isValid: React.PropTypes.bool.isRequired
  }
  render() {
    return (
      <Paper>
        <Toolbar>
          <ToolbarTitle text="Login"/>
        </Toolbar>
        <div>
          <TextField hintText="Username" /><br/>
          <TextField type="password" hintText="Password" /><br />
          <RaisedButton label="Login" primary={true} disabled={true} />
        </div>
      </Paper>
    )
  }
}

export default LoginPage

