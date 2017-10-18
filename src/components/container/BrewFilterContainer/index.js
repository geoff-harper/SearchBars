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

  componentWillReceiveProps() {
    this.setState({
      activeBrewFilters: []
    })
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

    _activeBrewFilters.indexOf(targetBrew) === -1 ?
      _activeBrewFilters = [..._activeBrewFilters, targetBrew] : _activeBrewFilters = _activeBrewFilters.filter(activeBrew => activeBrew != targetBrew);

    this.setState({
      activeBrewFilters: _activeBrewFilters
    })
  }

  render() {
    return (
      <div className="barView-beer-list">
        <h3 className="subtitle">Draught List</h3>
        <BrewTags
          brews={this.getBrews()}
          toggleBrew={this.toggleBrew}
          activeBrewFilters={this.state.activeBrewFilters} />
        <BrandList
          brands={this.props.brands}
          activeBrewFilters={this.state.activeBrewFilters} />
      </div>
    )
  }
}

export default BrewFilterContainer
