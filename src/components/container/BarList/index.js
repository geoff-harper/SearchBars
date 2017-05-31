import React from 'react'

import { BarListItem } from 'components'

class BarList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bar: {
        "name": "Social Lager",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      bar2: {
        "name": "Budweiser",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    }
  }

  render() {
    return (
      <section>
        <p>I'm trying to find a <button>bar's beer list</button> / <button>certain beer</button>.</p>

        <input id="mainSearch" type="text" list="barOptions" />

        <ul>
          <BarListItem
            name={this.state.bar.name}
            description={this.state.bar.description}/>

          <BarListItem
            name={this.state.bar2.name}
            description={this.state.bar2.description}/>

          <BarListItem />
        </ul>
      </section>
    )
  }
}

export default BarList
