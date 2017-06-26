import React from 'react'

const barButtonText = "a bar's beer list";
const beerButtonText = "a certain beer";
const anythingButtonText = "anything";

class MainSearchOptions extends React.Component {
  constructor() {
    super();

    this.changeSuggestionCategory = this.changeSuggestionCategory.bind(this);
  }

  changeSuggestionCategory(e) {
    e.preventDefault();
    this.props.changeSuggestionCategory(e.target.name);
  }

  setButton(buttonName) {
    const btnText = eval(`${buttonName}Text`);

    if(buttonName === this.props.activeButton) {
      return (<button name={buttonName} className="mainSearch-button mainSearch-button_active" onClick={this.changeSuggestionCategory}>{btnText}</button>)
    } else {
      return (<button name={buttonName} className="mainSearch-button" onClick={this.changeSuggestionCategory}>{btnText}</button>)
    }
  }

  render() {

    return (
      <p className="mainSearch-prompt">I'm trying to find {this.setButton("barButton")} / {this.setButton("beerButton")} / {this.setButton("anythingButton")}</p>
    )
  }
}

export default MainSearchOptions
