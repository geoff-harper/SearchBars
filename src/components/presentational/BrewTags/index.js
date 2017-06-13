import React from 'react'

const BrewTags = ({brews, toggleBrew}) => {

  return (
    <ul className="brewFilterList">
      <li>Filter: </li>
      {brews.map((brew, i) =>
        <li
          key={i}
          className={`brewFilter-${brew.replace(/\s+/g, '-').toLowerCase()}`}
          onClick={toggleBrew}>{brew}</li>
      )}
    </ul>
  )
}

export default BrewTags
