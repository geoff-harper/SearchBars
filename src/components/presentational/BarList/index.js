import React from 'react'

import { BarListItem } from 'components'

const BarList = ({barData, searchFilter}) => {

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

  return (
    <ul>
      {filteredBars.map((bar, i) =>
        <BarListItem
          key={i}
          name={bar.name}
          description={bar.description}
          brands={bar.brands}
          address={bar.address}
          searchFilter={searchFilter}/>
      )}
    </ul>
  )
}

export default BarList
