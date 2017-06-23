import React from 'react'

import { BarListItem } from 'components'

const BarList = ({barData, searchFilter, barSelected}) => {

  const _searchFilter = searchFilter.toLowerCase().trim();

  const checkBrands = (brands) => {
    let matches = [];
    for(let instance of brands) {
      if(instance.name.toLowerCase().includes(_searchFilter))
        return true;
    }
  }

  const filteredBars = barData.filter(bar =>
    (
      bar.name.toLowerCase().includes(_searchFilter) ||
      checkBrands(bar.brands)
    )
  );

  const barSelectedFunc = (barID) => {
    barSelected(barID)
  }

  return (
    <ul className="mainSearch-results un-list">
      {filteredBars.map((bar) =>
        <BarListItem
          key={bar.id}
          barID={bar.id}
          name={bar.name}
          description={bar.description}
          brands={bar.brands}
          address={bar.address}
          searchFilter={searchFilter}
          barSelected={barSelectedFunc} />
      )}
    </ul>
  )
}

export default BarList
