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
import styles from '../../../resources/theme/students'
import DialogForm from '../../templates/DialogForm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { edit, fetchStudents, update } from '../StudentsActions'
import { getEditingStudent } from '../StudentsReducer'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class EditStudent extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = values => {
    const { fetchStudents } = this.props
    // valida os campos se necessário
    this.props.update(values).then(data => {
      fetchStudents()
      if (data && data.code === 200) {
        this.props.history.push('/students')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/students')
  }

  render() {
    const { classes, student } = this.props
    return (
      <DialogForm
        open={student !== null}
        handleClose={this.onClose}
        transition={Transition}
        appBar={classes.appBar}
        flex={classes.flex}
        title="Editar Estudante">
        <Form
          data={student}
          onClose={this.onClose}
          onSubmit={this.onSubmit} />
      </DialogForm>
    )
  }
}

EditStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  student: getEditingStudent(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      update,
      edit,
      fetchStudents,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditStudent))
