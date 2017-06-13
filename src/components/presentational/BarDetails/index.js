import React from 'react'

import { } from 'components'

const BarDetails = ({name, description}) => {

  return (
    <header className="barView-header">
      <h2>{name}</h2>
      <p>{description}</p>
    </header>
  )
}

export default BarDetails
