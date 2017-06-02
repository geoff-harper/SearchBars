import React from 'react'

import { BarListItem } from 'components'

const BarList = ({data, searchFilter}) => {

  const _searchFilter = searchFilter.toLowerCase().trim();

  const checkBrands = (brands) => {
    let matches = [];
    for(let instance of brands) {
      if(instance.name.toLowerCase().includes(_searchFilter))
        return true;
    }
  }

  const filteredBars = data.filter(bar =>
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
          address={bar.address}/>
      )}
    </ul>
  )
}

export default BarList
