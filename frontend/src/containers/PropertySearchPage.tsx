/// <reference path="../main.d.ts" />

import * as React from 'react'
import PropertySearchResults from '../containers/PropertySearchResults'

export class PropertySearchPage extends React.Component<any, any> {
  render() {
    return (
      <div>
        <PropertySearchResults />
      </div>
    )
  }
}

export default PropertySearchPage
