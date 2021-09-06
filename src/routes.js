import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './App'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
)

export default App
