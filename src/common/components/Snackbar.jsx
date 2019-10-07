// IMPORTS
// Material-ui
import { Snackbar, SnackbarContent } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'
import CloseIcon from '@material-ui/icons/Close'

// External
import * as PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../resources/theme/snackbar'
import { clearSnackbar } from '../main/MainActions'
import { getSnackbar } from '../main/MainReducer'

const AUTOCLOSE_DURATION = 1000 * 15

class Snackbars extends Component {
  state = {
    message: null,
    open: false,
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
    this.props.doClear()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.snackbar) {
      this.setState({
        open: true,
        message: nextProps.snackbar.message,
        success: nextProps.snackbar.success,
      })
    }
  }

  render() {
    const { classes } = this.props
    const { message, success } = this.state

    if (!message) {
      return null
    }

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={this.state.open}
        autoHideDuration={AUTOCLOSE_DURATION}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={success ? classes.success : classes.error}
          message={message}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    )
  }
}

Snackbars.propTypes = {
  doClear: PropTypes.func.isRequired,
  snackbar: PropTypes.object,
  classes: PropTypes.object,
}

const mapStateToProps = store => ({
  snackbar: getSnackbar(store),
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      doClear: clearSnackbar,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Snackbars))
