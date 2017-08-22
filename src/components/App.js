import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { Landing } from 'components'

const App = () => {
  return (
    <Landing />
  )
}

export default App
// <ThemeProvider theme={theme}>
//   <Switch>
//     <Route path="/" component={Landing} exact />
//   </Switch>
// </ThemeProvider>
