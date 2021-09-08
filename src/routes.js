import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main } from './pages'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
)

export default App
