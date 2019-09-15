// IMPORTS
// External
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

// Internal
import Home from './pages/Home'
import Users from '../users/pages/index'
import Students from '../students/pages/index'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/students" component={Students} />
    </Switch>
  )
}

export default withRouter(Routes)
