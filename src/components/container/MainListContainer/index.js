import React from 'react'
import Axios from 'axios'

import { BarList, SearchForm } from 'components'

class MainListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      data: [],
      searchFilter: ""
    }

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    Axios.get('./data/data.json').then((response) =>
      this.setState({
        data: response.data
      })
    )
  }

  componentWillUnmount() { }

  handleInput(value) {
    this.setState({
      searchFilter: value
    });
  }

  render() {
    return (
      <section>
        <SearchForm changeFilter={this.handleInput} />
        <BarList data={this.state.data} searchFilter={this.state.searchFilter} />
      </section>
    )
  }
}

export default MainListContainer
