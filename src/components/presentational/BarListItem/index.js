import React from 'react'

class BarListItem extends React.Component {
  constructor() {
    super()

    this.state = {
      showAll: false
    }

    this.toggleList = this.toggleList.bind(this)
    this.updateBrands = this.updateBrands.bind(this)
  }

  toggleList(event) {
    (this.state.showAll) ? this.setState({showAll:false}) : this.setState({showAll:true});
    //event.stopPropagation();
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

  render() {
    var _brands = this.updateBrands();
    var prompt = (this.state.showAll) ? "... see less" : "... see more"

    return (
      <li>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <ul>
          {_brands.map((brand, i) =>
            <li key={i}>{brand.name}</li>
          )}
          <li onClick={this.toggleList}>{prompt}</li>
        </ul>
      </li>
    )
  }
}

export default BarListItem
