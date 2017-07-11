import React from 'react'

import { BarDetails, BrewFilterContainer, BarMap, BarContactInfo } from 'components'

class BarViewContainer extends React.Component {
  constructor () {
    super()
  }

  render() {
    const bar = this.props.barData;

    return (
      <section className="barView">
        <button
          className="closeButton"
          aria-label="Close bar info section"
          onClick={this.props.closeBarView}>&times;</button>
        <BarDetails
          name={bar.name}
          description={bar.description} />
        <BrewFilterContainer
          brands={bar.brands} />
        <BarContactInfo
          address={bar.address}
          phone={bar.phone} />
        <BarMap
          name={bar.name}
          long={bar.longitude}
          lat={bar.latitude} />
      </section>
    )
  }
}

export default BarViewContainer
