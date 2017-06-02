import React from 'react'

const BarListItem = ({name, description, brands, address}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        {brands.map((brand, i) =>
          <li key={i}>{brand.name}</li>
        )}
        <li>...see more</li>
      </ul>
    </li>
  )
}

export default BarListItem
