import React from 'react'


import { BarList, MainSearchOptions, MainSearchInput } from 'components'

class MainListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      activeButton: "",
      searchFilter: ""
    }

    this.changeFilter = this.changeFilter.bind(this);
    this.changeSuggestionCategory = this.changeSuggestionCategory.bind(this);
    this.getBars = this.getBars.bind(this);
    this.getBrands = this.getBrands.bind(this);
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

    for(let bar of this.props.barData) {
      bar.brands.map((brand, i) =>
        unsortedBrands = [...unsortedBrands, brand.name]
      )
    }

    return Array.from(new Set(unsortedBrands));
  }

  getBars() {
    let bars = [];

    for (let bar of this.props.barData) {
      bars = [...bars, bar.name];
    }

    return bars;
  }

  filterList() {
    if(this.state.activeButton === "barButton") {
      return [...this.getBars()].sort();
    } else if(this.state.activeButton === "beerButton") {
      return [...this.getBrands()].sort();
    } else {
      return [...this.getBars(),...this.getBrands()].sort();
    }
  }

  barSelected(barID) {
    this.props.barSelected(barID)
  }

  render() {
    const filteredList = this.filterList();

    return (
      <section className={this.props.barViewOpen ? "mainSearch barViewOpen" : "mainSearch"}>
        <form>
          <MainSearchOptions changeSuggestionCategory={this.changeSuggestionCategory} activeButton={this.state.activeButton} />
          <MainSearchInput filteredList={filteredList} changeFilter={this.changeFilter} />
        </form>
        <BarList
          barData={this.props.barData}
          searchFilter={this.state.searchFilter}
          barSelected={this.props.barSelected} />
      </section>
    )
  }
}

export default MainListContainer
