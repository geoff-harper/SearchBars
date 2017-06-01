import React from 'react'

const BarListItem = ({name, description, brands, address}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {brands.map((brand, i) =>
          <li>{brand.name}</li>
        )}
      </ul>
    </li>
  )
}

export default BarListItem
