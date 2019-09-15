// IMPORTS
// Material-ui
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'
import CloseIcon from '@material-ui/icons/Close'

// External
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/users'
import DialogForm from '../../templates/DialogForm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { edit, fetchUsers, update } from '../UserActions'
import { getEditingUser } from '../UserReducer'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class EditUser extends EnhancedComponent {
  state = {
    fields: {
      name: '',
      email: '',
      role_id: '',
    },
  }

  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = values => {
    const { fetchUsers } = this.props
    this.props.update(values).then(data => {
      fetchUsers()
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
  roles: state.user.roles || [],
  user: getEditingUser(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      update,
      edit,
      fetchUsers,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditUser))
