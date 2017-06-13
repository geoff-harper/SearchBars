import React from 'react'

import { BarDetails, BrewFilterContainer, BarMap, BarContactInfo } from 'components'

class BarViewContainer extends React.Component {
  constructor () {
    super()
  }

  render() {
    return (
      <section>
        <button
          aria-label="Close bar info section"
          onClick={this.props.closeBarView}>&times;</button>
        <BarDetails
          name={this.props.barData.name}
          description={this.props.barData.description} />
        <BrewFilterContainer
          brands={this.props.barData.brands} />
        <BarMap
          name={this.props.barData.name}
          long={this.props.barData.longitude}
          lat={this.props.barData.latitude} />
        <BarContactInfo
          address={this.props.barData.address}
          phone={this.props.barData.phone} />
      </section>
    )
  }
}

export default BarViewContainer
