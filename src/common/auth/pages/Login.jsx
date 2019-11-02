// IMPORTS
// Material-ui
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

// Internal
import styles from '../../../resources/theme/auth'
import EnhancedComponent from '../../components/EnhancedComponent'
import * as AuthActions from '../AuthActions'

class Login extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      email: '',
      password: '',
      showPassword: false,
    },
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }

  handleClickShowPassword = () => {
    this.setState({ fields: { ...this.state.fields, showPassword: !this.state.fields.showPassword}})
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.fields)
  }

  render() {
    const { classes } = this.props
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.onSubmit}
        onError={errors => console.log(errors)}
        className={classes.main}
      >
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Grid container 
            alignContent="center"
            alignItems="center"
            justify="center"
            spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                type="email"
                label="E-mail"
                fullWidth
                margin="dense"
                variant="outlined"
                autoComplete="email"
                value={this.state.fields.email}
                onChange={this.onChange('email')}
                validators={['required', 'isEmail']}
                errorMessages={['Campo Obrigatório', 'E-mail não é válido']}
              />
            </Grid>
            <Grid item xs={9}>
              <TextValidator
                type={this.state.fields.showPassword ? 'text' : 'password'}
                label="Senha"
                fullWidth
                margin="dense"
                variant="outlined"
                autoComplete="current-password"
                value={this.state.fields.password}
                onChange={this.onChange('password')}
                validators={['required']}
                errorMessages={['Campo Obrigatório']}
              />
            </Grid>
            <Grid item xs={3}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.fields.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </ValidatorForm>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(AuthActions, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Login))
