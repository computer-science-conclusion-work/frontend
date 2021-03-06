// IMPORTS
// Material UI
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'

// Externals imports (Dependencies)
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal imports
import styles from '../../../resources/theme/users'
import DialogConfirm from '../../templates/DialogConfirm'
import EnhancedComponent from '../../components/EnhancedComponent'
import { destroy, edit } from '../UserActions'
import { getEditingUser } from '../UserReducer'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class DeleteUser extends EnhancedComponent {
  componentDidMount() {
    this.props.edit(this.props.match.params.id)
  }

  onSubmit = () => {
    const { user, filters } = this.props
    this.props.destroy(user.id, filters).then(data => {
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
        <DialogConfirm
          open={user !== null}
          handleClose={this.onClose}
          transition={Transition}
          appBar={classes.appBar}
          flex={classes.flex}
          title="Excluir Usuário"
          handleSubmit={() => this.onSubmit()}
          handleOnClose={() => this.onClose()} />
    )
  }
}

DeleteUser.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  ...getEditingUser(state),
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
)(withStyles(styles)(DeleteUser))
