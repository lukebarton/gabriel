/// <reference path="../main.d.ts" />

import * as React from 'react'
import Property from '../model/Property'

export interface PropertyListProps {
  properties: Property[]
}

class PropertyList extends React.Component<PropertyListProps, any> {
  render() {
    const { properties } = this.props;

    return (
      <ol className="property-list">
        {properties.map(property =>
          <li key={ property.id }>
            <a href="#">{ property.name }</a>
            { property.id }
          </li>
          )}
      </ol>
    )
  }
}
export default PropertyList
