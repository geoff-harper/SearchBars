import React from 'react'
import Axios from 'axios'

import { BarList, SearchForm } from 'components'

class MainListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      data: [],
      searchFilter: "",
      uniqueBrands: [],
      uniqueBars: []
    }

    this.changeFilter = this.changeFilter.bind(this);
    this.getBars = this.getBars.bind(this);
    this.getBrands = this.getBrands.bind(this);
  }

  componentWillMount() {
    Axios.get('./data/data.json').then(response => {
      this.setState({ data: response.data }),
      this.getBrands(),
      this.getBars()
    }).catch(console.log.bind(console));
  }

  changeFilter(value) {
    this.setState({
      searchFilter: value
    });
  }

  getBrands() {
    let unsortedBrands = [];

    for(let bar of this.state.data) {
      bar.brands.map((brand, i) =>
        unsortedBrands = [...unsortedBrands, brand.name]
      )
    }

    const sortedBrands = Array.from(new Set(unsortedBrands));

    this.setState({
      uniqueBrands: sortedBrands
    })
  }

  getBars() {
    let bars = [];

    for (var bar of this.state.data) {
      bars = [...bars, bar.name];
    }

    this.setState({
      uniqueBars: bars
    })
  }

  render() {
    return (
      <section>
        <SearchForm changeFilter={this.changeFilter} brands={this.state.uniqueBrands} bars={this.state.uniqueBars} />
        <BarList data={this.state.data} searchFilter={this.state.searchFilter} />
      </section>
    )
  }
}

export default MainListContainer
