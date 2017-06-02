import React from 'react'

import { MainSearchDatalist } from 'components'

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      activeButton: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.changeDatalist = this.changeDatalist.bind(this);
  }

  handleInput(e) {
    this.props.changeFilter(e.target.value)
  }

  changeDatalist(e) {
    e.preventDefault();
    this.setState({
      activeButton: e.target.name
    });
  }

  render() {

    return (
      <form>
        <p>I'm trying to find a <button name="barButton" onClick={this.changeDatalist}>bar's beer list</button> / <button name="beerButton" onClick={this.changeDatalist}>certain beer</button> / <button name="anythingButton" onClick={this.changeDatalist}>anything</button>.</p>

        <input id="mainSearch" type="text" list="searchOptions" onChange={this.handleInput} />
        <MainSearchDatalist brands={this.props.brands} bars={this.props.bars} activeFilter={this.state.activeButton} />
      </form>
    )
  }
}

export default SearchForm
