import React from 'react'

const BrandList = ({brands}) => {

  return (
    <ul className="brew-list">
      {brands.map((brand, i) =>
        <li key={i}>
          <span>{brand.name}</span> - {brand.brews.map((brew, i) => (
            i === (brand.brews.length - 1) ? <span key={i}>{brew}</span> : <span key={i}>{brew}, </span>
          ))}
        </li>
      )}
    </ul>
  )
}

export default BrandList
