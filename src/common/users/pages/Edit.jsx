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
import styles from '../../../resources/theme/users'
import DialogForm from '../../templates/DialogForm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { edit, update } from '../UserActions'
import { getEditingUser } from '../UserReducer'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class EditUser extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = values => {
    const { filters } = this.props
    this.props.update(values, filters).then(data => {
      if (data && data.code === 200) {
        this.props.history.push('/users')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/users')
  }

  render() {
    const { classes, user } = this.props
    return (
      <DialogForm
        open={user !== null}
        handleClose={this.onClose}
        transition={Transition}
        appBar={classes.appBar}
        flex={classes.flex}
        title="Editar Usuário" >
        <Form
          data={user}
          onClose={this.onClose}
          onSubmit={this.onSubmit} />
      </DialogForm>
    )
  }
}

EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getEditingUser(state),
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
)(withStyles(styles)(EditUser))
