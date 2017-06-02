import React from 'react'

class SearchForm extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.changeFilter(e.target.value)
  }

  render() {
    return (
      <form>
        <p>I'm trying to find a <button>bar's beer list</button> / <button>certain beer</button>.</p>

        <input id="mainSearch" type="text" list="barOptions" onChange={this.handleInput} />
      </form>
    )
  }
}

export default SearchForm
