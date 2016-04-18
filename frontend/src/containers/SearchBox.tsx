/// <reference path="../main.d.ts" />

import * as React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'

import { SetSearchQuery } from '../actions/search'

export class SearchComponent extends React.Component<any, any> {

  render() {
    const { value, onChange, onKeyDown } = this.props
    return (
      <Paper style={{margin: "10px 0", padding: "0 10px"}}>
        <TextField id="search" hintText="e.g. 223 St George Wharf" fullWidth={true} underlineShow={false} value={value} onChange={onChange} onKeyDown={onKeyDown}/>
      </Paper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    value: state.search.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(new SetSearchQuery(e.target.value))
    },
    onKeyDown: (e) => {
      if (e.keyCode === 13)
        hashHistory.push('search')
    }
  }
}

const PropertySearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

export default PropertySearch
