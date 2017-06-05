import React from 'react'

import { MainSearchInput } from 'components'

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      activeButton: ""
    }

    this.changeFilter = this.changeFilter.bind(this);
    this.changeSuggestionCategory = this.changeSuggestionCategory.bind(this);
  }

  changeFilter(e) {
    this.props.changeFilter(e.target.value)
  }

  changeSuggestionCategory(e) {
    e.preventDefault();
    this.setState({
      activeButton: e.target.name
    });
  }

  render() {

    return (
      <form>
        <p>I'm trying to find a <button name="barButton" onClick={this.changeSuggestionCategory}>bar's beer list</button> / <button name="beerButton" onClick={this.changeSuggestionCategory}>certain beer</button> / <button name="anythingButton" onClick={this.changeSuggestionCategory}>anything</button>.</p>

        <MainSearchInput suggestionList={this.props.brands} changeFilter={this.changeFilter} />
      </form>
    )
  }
}

export default SearchForm
