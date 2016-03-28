/// <reference path="../main.d.ts" />

import * as React from 'react'
import PropertySearch from '../containers/PropertySearch'
import FilteredPropertyList from '../containers/FilteredPropertyList'

const App = () => (
  <div>

    <PropertySearch />
    <FilteredPropertyList />
  </div>
)

export default App
