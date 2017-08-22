import React from 'react'
import Axios from 'axios'
import DATA from './DATA.js'
import BodyBg from './body_bg.jpg'
import BodyBgMobile from './body_bg_mobile.jpg'
import Bubbles from './bubbles.svg'

import { Header, MainListContainer, BarViewContainer } from 'components'

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      barData: DATA,
      selectedBar: {},
      barViewOpen: false
    }

    this.barSelected = this.barSelected.bind(this);
    this.closeBarView = this.closeBarView.bind(this);
  }

  barSelected(barID) {
    const _selectedBar = this.state.barData.filter(bar => (bar.id === barID))

    this.setState({
      selectedBar: _selectedBar[0],
      barViewOpen: true
    })
  }

  closeBarView() {
    this.setState({
      barViewOpen: false
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainListContainer
          barData={this.state.barData}
          barSelected={this.barSelected}
          barViewOpen={this.state.barViewOpen}  />
        { this.state.barViewOpen ?
          <BarViewContainer
            barData={this.state.selectedBar}
            closeBarView={this.closeBarView} /> : null }
      </div>
    )
  }
}

export default Landing
