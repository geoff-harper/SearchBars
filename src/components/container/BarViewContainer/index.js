import React from 'react'

import { BarDetails, BarMap, BarContactInfo } from 'components'

class BarViewContainer extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  render() {
    const bar = this.props.barData;

    if(bar) {
      return (
        <section>
          <BarDetails name={bar.name} description={bar.description} />
          <BarMap name={bar.name} long={bar.longitude} lat={bar.latitude} />
          <BarContactInfo address={bar.address} phone={bar.phone} />
        </section>
      )
    } else {
      return(<section />)
    }
  }
}

export default BarViewContainer
