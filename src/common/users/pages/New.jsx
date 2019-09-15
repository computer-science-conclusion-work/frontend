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
import { post } from '../UserActions'
import Form from './Form'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class NewUser extends EnhancedComponent {
  state = {
    fields: {
      name: '',
      email: '',
      role_id: '',
    },
  }

  componentDidMount() {}

  onSubmit = values => {
    // valida os campos se necessário
    this.props.post(values).then(data => {
      if (data && data.code === 200) {
        this.props.history.push('/users')
      }
    })
  }

  onClose = () => {
    this.props.history.push('/users')
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
        title="Novo Usuário">
        <Form
          onClose={this.onClose}
          onSubmit={this.onSubmit} />
      </DialogForm>
    )
  }
}

NewUser.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  roles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  roles: state.user.roles || [],
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
)(withStyles(styles)(NewUser))
