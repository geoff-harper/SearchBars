import React from 'react'

const BarListItem = ({name, description}) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <ul>
        <li>Beer 1</li>
      </ul>
    </li>
  )
}

export default BarListItem
