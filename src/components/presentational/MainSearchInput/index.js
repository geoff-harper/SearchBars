import React from 'react'
import Autosuggest from 'react-autosuggest'

class MainSearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    }

    this.changeFilter = this.changeFilter.bind(this)
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.suggestionList.filter(lang =>
      lang.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue = suggestion => suggestion;

  renderSuggestion = suggestion => (
    <div>
      { suggestion }
    </div>
  )

  shouldRenderSuggestions = () => {
    return true;
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
    this.changeFilter(event);
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

  changeFilter(e) {
    this.props.changeFilter(e.target.value)
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
