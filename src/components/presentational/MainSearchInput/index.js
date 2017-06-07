import React from 'react'
import Autosuggest from 'react-autosuggest'

class MainSearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      noSuggestions: false
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
    suggestion
  )

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
    this.changeFilter(newValue);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const suggestions = this.getSuggestions(value);
    const isInputBlank = value.trim() === '';
    const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      noSuggestions
    });
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
      <fieldset>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          inputProps={inputProps}
        />
        {
          this.state.noSuggestions &&
            <p className="no-suggestions">
              No suggestions
            </p>
        }
      </fieldset>
    )
  }
}

export default MainSearchInput
