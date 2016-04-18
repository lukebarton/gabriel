/// <reference path="../main.d.ts" />

import * as _ from 'underscore'
import { connect } from 'react-redux'
import PropertyList from '../components/PropertyList'

const mapStateToProps = (state, ownProps) => {
  return {
    properties: _.values(state.propertiesById).filter((property) => {
      let searchQuery = state.search.query
      let propertyName = property.name
      if (propertyName.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
        return true
      }
    })
  }
}

const FilteredPropertyList = connect(
  mapStateToProps
)(PropertyList)

export default FilteredPropertyList
