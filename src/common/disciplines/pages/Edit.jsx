// IMPORTS
// Material-ui
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

// External
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/disciplines'
import DialogForm from '../../templates/DialogForm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { edit, update } from '../DisciplinesActions'
import { getEditingDiscipline } from '../DisciplinesReducer'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class EditDiscipline extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = values => {
    const { filters } = this.props
    // valida os campos se necessário
    this.props.update(values, filters).then(data => {
      if (data && data.code === 200) {
        this.props.history.push('/disciplines')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/disciplines')
  }

  render() {
    const { classes, discipline} = this.props
    return (
      <DialogForm
        open={discipline !== null}
        handleClose={this.onClose}
        transition={Transition}
        appBar={classes.appBar}
        flex={classes.flex}
        title="Editar Disciplina">
        <Form
          data={discipline}
          onClose={this.onClose}
          onSubmit={this.onSubmit} />
      </DialogForm>
    )
  }
}

EditDiscipline.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getEditingDiscipline(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      edit,
      update,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditDiscipline))
