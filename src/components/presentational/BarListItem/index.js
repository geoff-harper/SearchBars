import React from 'react'

class BarListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAll: false
    }

    this.toggleList = this.toggleList.bind(this)
    this.updateBrands = this.updateBrands.bind(this)
    this.barSelected = this.barSelected.bind(this)
  }

  toggleList(event) {
    (this.state.showAll) ? this.setState({showAll:false}) : this.setState({showAll:true});
    event.stopPropagation();
  }

  updateBrands() {
    var _brands = this.props.brands;
    var _searchFilter = this.props.searchFilter.toLowerCase().trim();
    var searchTargetIndex = "";

    _brands.forEach((brand, index) => {
      (brand.name.toLowerCase().trim() === _searchFilter) ? searchTargetIndex = index : null
    });

    _brands.splice(0, 0, _brands.splice(searchTargetIndex, 1)[0]);

    if(this.state.showAll) {
      return _brands;
    } else {
      return (_brands.slice(0,2));
    }
  }

  barSelected() {
    this.props.barSelected(this.props.barID)
  }

  render() {
    var _brands = this.updateBrands();
    var prompt = (this.state.showAll) ? "... see less" : "... see more"

    return (
      <li onClick={this.barSelected}>
        <h3 className="subtitle">{this.props.name}</h3>
        <ul className="mainSearch-results-beerList un-list">
          <li>Beers: </li>
          {_brands.map((brand, i) =>
            (i === (_brands.length - 1)) ? <li key={i}>{brand.name} </li> : <li key={i}>{brand.name}, </li>
          )}
          <li onClick={this.toggleList}>{prompt}</li>
        </ul>
      </li>
    )
  }
}

export default BarListItem
