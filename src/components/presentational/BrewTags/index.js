import React from 'react'

const BrewTags = ({brews, toggleBrew, activeBrewFilters}) => {

  return (
    <ul className="brewFilterList un-list clearfix">
      <li>Filters: </li>
      {brews.map((brew, i) =>
        <li
          key={i}
          className={`brewFilter-${brew.replace(/\s+/g, '-').toLowerCase()}` + (activeBrewFilters.indexOf(brew) !== -1 ? ' activeBrew' : '')}
          onClick={toggleBrew}>{brew}</li>
      )}
    </ul>
  )
}

export default BrewTags
