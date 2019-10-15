// IMPORTS
// Material-ui
import { DialogActions, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import withStyles from '@material-ui/core/styles/withStyles'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import SaveIcon from '@material-ui/icons/Save'
import BackIcon from '@material-ui/icons/ArrowBack'

// External
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Internal
import styles from '../../../resources/theme/students'
import EnhancedComponent from '../../components/EnhancedComponent'

class StudentForm extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      registration: '',
      name: '',
      egress_date: new Date(), 
    },
  }

  handleClose = () => this.props.onClose && this.props.onClose()

  handleDateChange = date => {
    this.setState({
      ...this.state,
      fields: {
        ...this.state.fields,
        egress_date: date
      }
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...nextProps,
        fields: {
          ...nextProps.data,
          egress_date: new Date(),
        }
      })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit && this.props.onSubmit(this.state.fields)
  }

  render() {
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.onSubmit}
        onError={errors => console.log(errors)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextValidator
                onChange={this.onChange('registration')}
                label="Matrícula"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.fields.registration}
                validators={['required']}
                errorMessages={['Campo Obrigatório']}
              />
            </Grid>
            <Grid item xs>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-inline"
                  label="Data de Egresso"
                  disableToolbar
                  fullWidth
                  variant="outlined"
                  format="dd/MM/yyyy"
                  margin="dense"
                  value={this.state.fields.egress_date}
                  onChange={this.handleDateChange}
                  required
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }} />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container spacing={16}>
            <Grid item xs>
              <TextValidator
                onChange={this.onChange('name')}
                label="Nome"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.fields.name}
                validators={['required']}
                errorMessages={['Campo Obrigatório']}
              />
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

StudentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  student: state.student.editingStudent || [],
})

export default connect(mapStateToProps)(withStyles(styles)(StudentForm))
