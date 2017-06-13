import React from 'react'

import { BrandList, BrewTags } from 'components'

class BrewFilterContainer extends React.Component {
  constructor() {
    super()

    this.state = ({
      activeBrewFilters: []
    })

    this.getBrews = this.getBrews.bind(this)
    this.toggleBrew = this.toggleBrew.bind(this)
  }

  getBrews() {
    let unsortedBrews = [];

    for (let brand of this.props.brands) {
      brand.brews.map((brew, i) => unsortedBrews = [...unsortedBrews, brew])
    }

    return Array.from(new Set(unsortedBrews));
  }

  toggleBrew(event) {
    const targetBrew = event.target.innerHTML;
    let _activeBrewFilters = [...this.state.activeBrewFilters];

    //console.log(_activeBrewFilters.filter(targetBrew).length);

    this.setState({
      activeBrewFilters: _activeBrewFilters
    })
  }

  render() {
    return (
      <div className="barView-beer-list">
        <h3>Brand List</h3>
        <BrewTags
          brews={this.getBrews()}
          toggleBrew={this.toggleBrew} />
        <BrandList brands={this.props.brands} />
      </div>
    )
  }
}

export default BrewFilterContainer
