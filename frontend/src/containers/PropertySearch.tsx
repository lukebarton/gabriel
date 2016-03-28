/// <reference path="../main.d.ts" />

import { connect } from 'react-redux'
import { setSearchQuery } from '../actions/search'
import { Textbox, TextboxProps } from '../components/Textbox'

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.search.query
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setSearchQuery(e.target.value))
    }
  }
}

const PropertySearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Textbox)

export default PropertySearch
