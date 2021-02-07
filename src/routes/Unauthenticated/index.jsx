import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from 'features/Login'

export default () => (
  <Router>
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
)
