/// <reference path="../main.d.ts" />

import * as React from 'react'
import {connect} from 'react-redux'

export class PropertyPageComponent extends React.Component<any, any> {
  render() {
    const { property } = this.props
    return (
      <div className="property-details">
        <h1>{property.name}</h1>
        <p>Some Details here</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    property: state.propertiesById[ownProps.params.propertyId]
  }
}

const PropertyPage = connect(
  mapStateToProps
)(PropertyPageComponent)


export default PropertyPage
