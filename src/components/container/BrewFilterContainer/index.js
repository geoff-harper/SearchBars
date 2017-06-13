import React from 'react'

import { BrewList } from 'components'

class BrewFilterContainer extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <BrewList
        brands = {this.props.brands} />
    )
  }
}

export default BrewFilterContainer
