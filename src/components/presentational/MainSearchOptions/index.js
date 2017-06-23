import React from 'react'

class MainSearchOptions extends React.Component {
  constructor() {
    super();

    this.changeSuggestionCategory = this.changeSuggestionCategory.bind(this);
  }

  changeSuggestionCategory(e) {
    e.preventDefault();
    this.props.changeSuggestionCategory(e.target.name);
  }

  render() {

    return (
      <p className="mainSearch-prompt">I'm trying to find <button name="barButton" className="mainSearch-button" onClick={this.changeSuggestionCategory}>a bar's beer list</button> / <button name="beerButton" className="mainSearch-button" onClick={this.changeSuggestionCategory}>a certain beer</button> / <button name="anythingButton" className="mainSearch-button" onClick={this.changeSuggestionCategory}>anything</button></p>
    )
  }
}

export default MainSearchOptions
