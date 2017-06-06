import React from 'react'
import Axios from 'axios'

import { BarList, MainSearchOptions, MainSearchInput } from 'components'

class MainListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      barData: [],
      activeButton: "",
      searchFilter: ""
    }

    this.changeFilter = this.changeFilter.bind(this);
    this.changeSuggestionCategory = this.changeSuggestionCategory.bind(this);
    this.getBars = this.getBars.bind(this);
    this.getBrands = this.getBrands.bind(this);
  }

  componentWillMount() {
    Axios.get('./data/data.json').then(response => {
      this.setState({ barData: response.data }),
      this.getBrands(),
      this.getBars()
    }).catch(console.log.bind(console));
  }

  changeFilter(value) {
    this.setState({
      searchFilter: value
    });
  }

  changeSuggestionCategory(value) {
    this.setState({
      activeButton: value
    });
  }

  getBrands() {
    let unsortedBrands = [];

    for(let bar of this.state.barData) {
      bar.brands.map((brand, i) =>
        unsortedBrands = [...unsortedBrands, brand.name]
      )
    }

    const sortedBrands = Array.from(new Set(unsortedBrands));

    return sortedBrands;
  }

  getBars() {
    let bars = [];

    for (let bar of this.state.barData) {
      bars = [...bars, bar.name];
    }

    return bars;
  }

  filterList() {
    if(this.state.activeButton === "barButton") {
      return [...this.getBars()];
    } else if(this.state.activeButton === "beerButton") {
      return [...this.getBrands()];
    } else {
      return [...this.getBars(),...this.getBrands()];
    }
  }

  render() {
    const filteredList = this.filterList();

    return (
      <section>
        <form>
          <MainSearchOptions changeSuggestionCategory={this.changeSuggestionCategory} />
          <MainSearchInput filteredList={filteredList} changeFilter={this.changeFilter} />
        </form>
        <BarList barData={this.state.barData} searchFilter={this.state.searchFilter} />
      </section>
    )
  }
}

export default MainListContainer
