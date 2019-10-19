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
import PropTypes from 'prop-types'

// Internal
import styles from '../../../resources/theme/disciplines'
import EnhancedComponent from '../../components/EnhancedComponent'

class DisciplineForm extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      code: '',
      name: '',
      alias: '',
      period: '',
    },
  }

  handleClose = () => this.props.onClose && this.props.onClose()

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...nextProps,
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
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.onSubmit}
        onError={errors => console.log(errors)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={8}>
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
            <Grid item xs={4}>
                <TextValidator
                    onChange={this.onChange('alias')}
                    label="Pseudônimo"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    value={this.state.fields.alias}
                    validators={['required']}
                    errorMessages={['Campo Obrigatório']}
                />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs>
                <TextValidator
                    onChange={this.onChange('code')}
                    label="Código"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    value={this.state.fields.code}
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
                <TextValidator
                    onChange={this.onChange('period')}
                    label="Período"
                    type="number"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    value={this.state.fields.period}
                    validators={[
                    'required',
                    'isNumber',
                    'minNumber:1',
                    'maxNumber:10',
                    ]}
                    errorMessages={[
                    'Campo Obrigatório',
                    'Somente números',
                    'Deve ser maior que a 1',
                    'Deve ser menor que a 10',
                    ]}
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

DisciplineForm.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

export default withStyles(styles)(DisciplineForm)
