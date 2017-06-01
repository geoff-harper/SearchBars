import React from 'react'

import { BarListItem } from 'components'

const BarList = ({bars}) => {
  return (
    <ul>
      {bars.map((bar, i) =>
        <BarListItem
          name={bar.name}
          description={bar.description}
          brands={bar.brands}
          address={bar.address}/>
      )}
    </ul>
  )
}

export default BarList
