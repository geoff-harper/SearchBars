import React from 'react'
import Axios from 'axios'

import { Header, MainListContainer, BarViewContainer } from 'components'

class Landing extends React.Component {
  constructor () {
    super()

    this.state = {
      barData: []
    }
  }

  componentWillMount() {
    Axios.get('./data/data.json').then(response => {
      this.setState({ barData: response.data })
    }).catch(console.log.bind(console));
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainListContainer barData={this.state.barData} />
        <BarViewContainer barData={this.state.barData[0]} />
      </div>
    )
  }
}

export default Landing
