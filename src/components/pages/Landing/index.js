import React from 'react'
import Axios from 'axios'

import { Header, MainListContainer, BarViewContainer } from 'components'

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      barData: [],
      selectedBar: {},
      barViewOpen: false
    }

    this.barSelected = this.barSelected.bind(this);
    this.closeBarView = this.closeBarView.bind(this);
  }

  componentWillMount() {
    Axios.get('./data/data.json').then(response => {
      this.setState({ barData: response.data })
    }).catch(console.log.bind(console));
  }

  barSelected(barID) {
    const _selectedBar = this.state.barData.filter(bar => (
      bar.id === barID))

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
          barSelected={this.barSelected}  />
        { this.state.barViewOpen ?
          <BarViewContainer
            barData={this.state.selectedBar}
            closeBarView={this.closeBarView} /> : null }
      </div>
    )
  }
}

export default Landing
