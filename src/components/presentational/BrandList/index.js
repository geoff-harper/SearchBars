import React from 'react'

const BrandList = ({brands, activeBrewFilters}) => {

  return (
    <ul className="brewList un-list clearfix">
      {activeBrewFilters.length === 0 ?
        brands.map((brand, i) =>
          <li className="brandFull" key={i}>
            {brand.name}: {brand.brews.map((brew, i) => (
                <span key={i} className={`brewList-${brew.replace(/\s+/g, '-').toLowerCase()}`}>{brew}</span>
            ))}
          </li>
        )
        : brands.map((brand, i) => {
          let brewMatched = false;
          for(let brew of brand.brews) {
            activeBrewFilters.indexOf(brew) !== -1 ? brewMatched = brewMatched || true : brewMatched = brewMatched || false
          }
          if(brewMatched) return(<li key={i} className="brandCondensed">{brand.name}</li>)
        }
      )}
    </ul>
  )
}

export default BrandList

// i === (brand.brews.length - 1) ?
//   <span key={i} className={`brewList-${brew.replace(/\s+/g, '-').toLowerCase()}`}>{brew}</span> : <span key={i} className={`brewList-${brew.replace(/\s+/g, '-').toLowerCase()}`}>{brew}, </span>
