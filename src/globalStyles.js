import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }
  
  body {
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
  }
`

export default GlobalStyle
