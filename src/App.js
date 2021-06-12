import React from 'react'
import GlobalStyles from './app/GlobalStyles'
import World from 'features/world/World'
import theme from './app/theme'
import {ThemeProvider} from 'styled-components'

const App = ({gameLoop}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <World gameLoop={gameLoop} />
    </ThemeProvider>
  )
}

export default App
