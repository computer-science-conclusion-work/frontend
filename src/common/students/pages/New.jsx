// IMPORTS
// Material-ui
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

// Externals imports (Dependencies)
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal imports
import styles from '../../../resources/theme/students'
import DialogForm from '../../templates/DialogForm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { post } from '../StudentsActions'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class NewStudent extends EnhancedComponent {
  componentDidMount() {}

  onSubmit = values => {
    const { filters } = this.props
    // valida os campos se necessário
    this.props.post(values, filters).then(data => {
      if (data && data.code === 200) {
        this.props.history.push('/students')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/students')
  }

  render() {
    const { classes } = this.props
    return (
      <DialogForm
        open={true}
        handleClose={this.onClose}
        transition={Transition}
        appBar={classes.appBar}
        flex={classes.flex}
        title="Novo Estudante">
        <Form
          onClose={this.onClose}
          onSubmit={this.onSubmit} />
      </DialogForm>
    )
  }
}

NewStudent.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  filters: state.student.filters,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      post,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NewStudent))
