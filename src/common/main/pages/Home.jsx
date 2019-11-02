import Divider from '@material-ui/core/Divider'
// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

// External
import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Internal
import styles from '../../../resources/theme/home'

class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.paper} elevation={0}>
        <Typography variant="h3">Home</Typography>
        <Divider className={classes.divider} />
        <Typography>
          TODO:{' '}
          <span className={classes.span}>Dashboard com as principais informações dos estudantes</span>
        </Typography>
      </Paper>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
