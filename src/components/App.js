import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { Landing } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }

  .logo-container { max-width: 200px; opacity: 0; }
  fieldset { border: none; }
  .map {height: 200px; width: 200px}
`

//TODO:
//      suggestions stay open on filter click
//      see more button in list results

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={Landing} exact />
      </Switch>
    </ThemeProvider>
  )
}

export default App
