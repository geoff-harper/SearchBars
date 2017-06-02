import React from 'react'

import { BarListItem } from 'components'

const BarList = ({data, searchFilter}) => {

  //console.log(data);
  console.log(searchFilter);
  //console.log("Cat's".includes(searchFilter));

  const filteredBars = data.filter(bar => {
    bar.name.includes(searchFilter)
  })
  console.log(filteredBars);
  return (
    <ul>
      {data.map((bar, i) =>
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
