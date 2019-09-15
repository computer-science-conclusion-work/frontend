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
import EnhancedComponent from '../../components/EnhancedComponent'
import { post } from '../StudentsActions'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class NewStudent extends EnhancedComponent {
  state = {
    fields: {
      id: '',
      name: '',
    },
  }

  componentDidMount() {}

  onSubmit = values => {
    // valida os campos se necessário
    this.props.post(values).then(data => {
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
  roles: state.students.roles || [],
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
