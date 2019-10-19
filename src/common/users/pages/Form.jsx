// IMPORTS
// Material-ui
import { DialogActions, Grid, Select } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'
import SaveIcon from '@material-ui/icons/Save'
import BackIcon from '@material-ui/icons/ArrowBack'

// External
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Internal
import styles from '../../../resources/theme/users'
import EnhancedComponent from '../../components/EnhancedComponent'

class UserForm extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      name: '',
      email: '',
      password: '',
      id_role: '',
    },
  }

  handleClose = () => this.props.onClose && this.props.onClose()

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...prevState,
        fields: {
          ...nextProps.data,
        }
      })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit && this.props.onSubmit(this.state.fields)
  }

  render() {
    const { classes, roles } = this.props
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.onSubmit}
        onError={errors => console.log(errors)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextValidator
                onChange={this.onChange('name')}
                label="Nome"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.fields.name}
                validators={['required']}
                errorMessages={['Campo Obrigatório']} />
            </Grid>
            <Grid item xs>
              <TextValidator
                onChange={this.onChange('email')}
                label="Email"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.fields.email}
                validators={['required', 'isEmail']}
                errorMessages={['Campo Obrigatório', 'Email não é válido']} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextValidator
                onChange={this.onChange('password')}
                fullWidth
                label="Senha"
                margin="dense"
                variant="outlined"
                type="password"
                value={this.state.fields.password}
                validators={['required']}
                errorMessages={['Campo Obrigatório']}
                />
            </Grid>
            <Grid item xs>
              <TextValidator
                select
                label="Tipo de Usuário"
                fullWidth
                onChange={this.onChange('id_role')}
                value={this.state.fields.id_role}
                margin="dense"
                variant="outlined"
                validators={['required']}
                errorMessages={['Campo Obrigatório']}
              >
                {roles.map(role => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.value}
                  </MenuItem>
                ))}
              </TextValidator>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleClose}
            size="medium"
            variant="contained">
              <BackIcon />{` Cancelar`}
          </Button>
          <Button
            type="submit"
            color="primary"
            size="medium"
            variant="contained">
              <SaveIcon />{` Salvar`}
          </Button>
        </DialogActions>
      </ValidatorForm>
    )
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  roles: state.user.roles || [],
  user: state.user.editingUser || [],
})

export default connect(mapStateToProps)(withStyles(styles)(UserForm))
