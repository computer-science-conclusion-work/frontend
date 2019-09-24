// IMPORTS
// External
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

// Internal
import consts from '../../consts'
// Rotas
import Home from './pages/Home'
import Users from '../users/pages/index'
import Students from '../students/pages/index'
import EditUser from '../users/pages/Edit'

/* Rotas Privadas */
const PrivateRouteWrapper = props => {
  const { user, role, ...routeProps } = props
  // 1 = admin; 2 = professor; 3 = estudante
  if (user && role.indexOf(user.id_role) > -1) {
    return <Route {...routeProps} />
  } else {
    // Usuário sem acesso a essa rota
    return <Redirect to="/" />
  }
}

const PrivateRoute = connect(state => ({
  user: state.auth.user,
}))(PrivateRouteWrapper)

/* Rota Root Privada */
const PrivateRootRouteWrapper = props => {
  const { user, path } = props
  if (user && user.id_role === consts.ROLE_ADMIN) {
    return <Route path={path} component={Home} />
  } else {
    return <Route path={path} component={Home} />
  }
}

const PrivateRootRouter = connect(state => ({
  user: state.auth.user,
}))(PrivateRootRouteWrapper)

const Routes = () => {
  return (
    <Switch>
      {/* Rotas disponíveis a todos */}
      <PrivateRootRouter exact path="/" />
      <Route path="/my_users/:id/edit" component={EditUser} />

      {/* Rotas Privadas para Admin */}
      <PrivateRoute role={[consts.ROLE_ADMIN]} path="/users" component={Users} />
      <PrivateRoute role={[consts.ROLE_ADMIN]} path="/students" component={Students} />

      {/* Rotas Privadas para Professor */}

      {/* Rotas Privadas para Estudante */}

      {/* Redirect */}
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default withRouter(Routes)
