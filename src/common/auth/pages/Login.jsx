// IMPORTS
// Material-ui
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/auth'
import EnhancedComponent from '../../components/EnhancedComponent'
import * as AuthActions from '../AuthActions'

class Login extends EnhancedComponent {
  onSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.fields)
  }

  render() {
    const { classes } = this.props
    return (
      <form onSubmit={this.onSubmit} className={classes.main}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                Autentique-se
              </Typography>

              <TextField
                type="email"
                label="E-mail"
                required
                autoComplete="email"
                onChange={this.onChange('email')}
              />
              <TextField
                type="password"
                label="Senha"
                required
                autoComplete="current-password"
                onChange={this.onChange('password')}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </form>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login))
