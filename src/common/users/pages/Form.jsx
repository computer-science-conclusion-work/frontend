// IMPORTS
// Material-ui
import { DialogActions, Grid, Select } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

// Internal
import styles from '../../../resources/theme/users'
import EnhancedComponent from '../../components/EnhancedComponent'

class UserForm extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      name: '',
      email: '',
      role_id: '',
    },
  }

  handleClose = () => this.props.onClose && this.props.onClose()

  componentDidUpdate(nextProps) {
    if (!this.state.dirty && nextProps.data) {
      this.setState({
        fields: {
          ...nextProps.data,
        },
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
      <form onSubmit={this.onSubmit}>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item>
              <TextField
                onChange={this.onChange('name')}
                label="Nome"
                required
                fullWidth
                value={this.state.fields.name}
              />
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item>
              <TextField
                onChange={this.onChange('email')}
                label="E-mail"
                required
                value={this.state.fields.email}
              />
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel>Tipo de Usuário</InputLabel>
                <Select
                  onChange={this.onChange('role_id')}
                  value={this.state.fields.role_id}
                >
                  <MenuItem>Selecione...</MenuItem>
                  {roles.map(role => (
                    <MenuItem key={role.id} value={role.id}>
                      {role.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit">
            Salvar
          </Button>
          <Button onClick={this.handleClose}>Cancelar</Button>
        </DialogActions>
      </form>
    )
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  roles: state.user.roles || [],
})

export default connect(mapStateToProps)(withStyles(styles)(UserForm))
