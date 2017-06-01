import React from 'react'
import Axios from 'axios'

import { BarList } from 'components'

class MainListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Bars: []
    }
  }

  componentDidMount() {
    Axios.get('./data/data.json').then((response) => {
        console.log(response.data)
        this.setState({
          Bars: response.data
        })
    })
  }

  componentWillUnmount() { }

  render() {
    return (
      <section>
        <p>I'm trying to find a <button>bar's beer list</button> / <button>certain beer</button>.</p>

        <input id="mainSearch" type="text" list="barOptions" />

        <BarList bars={this.state.Bars} />
      </section>
    )
  }
}

export default MainListContainer
