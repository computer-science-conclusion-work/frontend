// IMPORTS
// Material-ui
import { DialogActions, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import withStyles from '@material-ui/core/styles/withStyles'
import { DatePicker } from '@material-ui/pickers'
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
                type="number"
                margin="dense"
                variant="outlined"
                fullWidth
                value={this.state.fields.registration}
                validators={[
                  'required',
                  'isNumber',
                  'minNumber:0',
                ]}
                errorMessages={[
                  'Campo Obrigatório',
                  'Somente números',
                  'Deve ser maior que a 0',
                ]}
                />
            </Grid>
            <Grid item xs>
              <DatePicker
                label="Data de Egresso"
                fullWidth
                format="dd/MM/yyyy"
                disableFuture
                inputVariant="outlined"
                margin="dense"
                required
                onChange={this.onChangeValue('egress_date')}
                value={this.state.fields.egress_date} />
            </Grid>
          </Grid>
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
