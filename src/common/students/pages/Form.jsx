// IMPORTS
// Material-ui
import { DialogActions, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

// External
import React from 'react'
import { connect } from 'react-redux'

// Internal
import styles from '../../../resources/theme/students'
import EnhancedComponent from '../../components/EnhancedComponent'

class StudentForm extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      id: '',
      name: '',
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
    return (
      <form onSubmit={this.onSubmit}>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs>
              <TextField
                onChange={this.onChange('name')}
                label="Nome"
                margin="dense"
                variant="outlined"
                fullWidth
                required
                value={this.state.fields.name}
              />
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

StudentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  roles: state.students.roles || [],
})

export default connect(mapStateToProps)(withStyles(styles)(StudentForm))
