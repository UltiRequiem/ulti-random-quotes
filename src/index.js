import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import GlobalStyles from './globalStyles'

const StyledApp = () => (
  <>
    <GlobalStyles />
    <App />
  </>
)

ReactDOM.render(<StyledApp />, document.getElementById('root'))
