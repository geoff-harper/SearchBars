import React from 'react'

import { BarDetails, BarMap, BarContactInfo } from 'components'

class BarViewContainer extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render() {
    return (
      <section>
        <BarDetails name={this.props.barData.name} description={this.props.barData.description} />
        <BarMap name={this.props.barData.name} long={this.props.barData.longitude} lat={this.props.barData.latitude} />
        <BarContactInfo address={this.props.barData.address} phone={this.props.barData.phone} />
      </section>
    )
  }
}

export default BarViewContainer
