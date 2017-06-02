import React from 'react'

const MainSearchDatalist = ({ bars, brands, activeFilter }) => {

  var list = [];

  if(activeFilter === "barButton") {
    list = [...bars];
  } else if(activeFilter === "beerButton") {
    list = [...brands];
  } else {
    list = [...brands, ...bars];
  }

  return (
    <datalist id="searchOptions">
      {list.map((item, i) =>
        <option key={i} value={item} />
      )}
    </datalist>
  )
}

export default MainSearchDatalist
