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

        <input id="mainSearch" type="text" list="searchOptions" onChange={this.handleInput} />
        <datalist id="searchOptions">
          <option>123</option>
          <option>789</option>
        </datalist>
      </form>
    )
  }
}

export default SearchForm
