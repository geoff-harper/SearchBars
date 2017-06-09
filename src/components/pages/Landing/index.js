import React from 'react'
import Axios from 'axios'

import { Header, MainListContainer, BarViewContainer } from 'components'

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      barData: [],
      selectedBar: {}
    }

    this.barSelected = this.barSelected.bind(this);
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
      selectedBar: _selectedBar[0]
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainListContainer barData={this.state.barData} barSelected={this.barSelected}  />
        { Object.getOwnPropertyNames(this.state.selectedBar).length > 0 ?
          <BarViewContainer barData={this.state.selectedBar} /> : null }
      </div>
    )
  }
}

export default Landing
