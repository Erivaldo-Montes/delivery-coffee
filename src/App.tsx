import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { HeaderContextProvider } from './context/headerContext'
import { CoffeeContextProvider } from './context/coffeeContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderContextProvider>
        <BrowserRouter>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </BrowserRouter>
      </HeaderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
