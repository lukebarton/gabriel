/// <reference path="../main.d.ts" />

import * as React from 'react'
import { Link } from 'react-router'
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
            <Link to={`/property/${property.id}`}>{ property.name }</Link>
            { property.id }
          </li>
          )}
      </ol>
    )
  }
}
export default PropertyList
