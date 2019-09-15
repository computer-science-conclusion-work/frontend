// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'

// External
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Internal
import '../../resources/less/style.less'
import Menu from '../components/Menu'
import Routes from './routes'
import styles from '../../resources/theme/app'

class App extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Menu open={open} handleDrawerClose={this.handleDrawerClose} handleDrawerOpen={this.handleDrawerOpen} />
        <main className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Routes />
        </main>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRouter(connect()(withStyles(styles)(App)))
