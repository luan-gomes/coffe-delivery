import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hello, Coffe Delivery</div>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
