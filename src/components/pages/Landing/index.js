import React from 'react'

import { Header, MainListContainer } from 'components'

class Landing extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainListContainer />
      </div>
    )
  }
}

export default Landing
