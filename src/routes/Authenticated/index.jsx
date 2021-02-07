import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from 'features/Dashboard'

export default () => (
  <Router>
    <Switch>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
)
