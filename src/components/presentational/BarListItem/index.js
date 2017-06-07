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

  toggleList() {
    (this.state.showAll) ? this.setState({showAll:false}) : this.setState({showAll:true})
  }

  updateBrands() {
    if(this.state.showAll) {
      return (this.props.brands);
    } else {
      return (this.props.brands.slice(0,2));
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
