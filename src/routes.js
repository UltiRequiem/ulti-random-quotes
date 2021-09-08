import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Quote, Footer } from './App'

const Main = () => (
  <>
    <Quote />
    <Footer />
  </>
)

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
)

export default App
