import React from 'react'
import Autosuggest from 'react-autosuggest'

class MainSearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    }

    this.changeFilter = this.changeFilter.bind(this)
  }

  componentWillMount() {
    this.setState({ suggestions: [...this.props.filteredList] })
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return this.props.filteredList.filter(opt =>
      opt.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue(suggestion) {
    return suggestion;
  }

  renderSuggestion = suggestion => (
    <div>
      { suggestion }
    </div>
  )

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
    this.changeFilter(newValue);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  shouldRenderSuggestions(value) {
    return true;
  }

  changeFilter(newValue) {
    this.props.changeFilter(newValue)
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
      />
    )
  }
}

export default MainSearchInput
