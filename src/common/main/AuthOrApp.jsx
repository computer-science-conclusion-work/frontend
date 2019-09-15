// IMPORTS
// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

// External
import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import { theme } from '../../resources/theme'
import { checkAuth, logout } from '../auth/AuthActions'
import Auth from '../auth/pages/Login'
import Snackbar from '../components/Snackbar'
import App from './App'

class AuthOrApp extends Component {
  componentDidMount() {
    this.props.checkAuth()
  }

  render() {
    const { token } = this.props.auth || false
    if (token) {
      axios.defaults.headers.common['Authorization'] = `${token.token_type} ${
        token.access_token
      }`
    }

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Snackbar />
        {token ? <App>{this.props.children}</App> : <Auth {...this.props} />}
      </MuiThemeProvider>
    )
  }
}

AuthOrApp.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.any,
  checkAuth: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      checkAuth,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthOrApp)
