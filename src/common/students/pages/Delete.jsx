// IMPORTS
// Material-ui
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/default'
import DialogConfirm from '../../templates/DialogConfirm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { destroy, edit } from '../StudentsActions'
import { getEditingStudent } from '../StudentsReducer'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class DeleteStudent extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = () => {
    const { student, filters } = this.props
    this.props.destroy(student.id, filters).then(data => {
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
      <DialogConfirm
          open={student !== null}
          handleClose={this.onClose}
          transition={Transition}
          appBar={classes.appBar}
          flex={classes.flex}
          title="Excluir Estudante"
          handleSubmit={() => this.onSubmit()}
          handleOnClose={() => this.onClose()} />
    )
  }
}

DeleteStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getEditingStudent(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      destroy,
      edit,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DeleteStudent))
