// IMPORTS
// Material UI
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

// Externals imports (Dependencies)
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styles from '../../../../resources/theme/students'
import EnhancedComponent from '../../../components/EnhancedComponent'
import { fetchCurriculumEquivalents } from '../../StudentsActions'

// Internal imports
import List from './List'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class CurriculumEquivalents extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {},
  }

  componentDidMount() {
    this.props.fetchCurriculumEquivalents(this.props.match.params.id)
  }

  onClose = () => {
    this.props.history.push('/students')
  }

  render() {
    const { classes, items } = this.props
    return (
        <Dialog
            open={items !== null}
            fullScreen
            onClose={this.onClose}
            TransitionComponent={Transition}
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                    Currículo Equivalentes
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={this.onClose}
                    aria-label="Close"
                >
                    <CloseIcon />
                </IconButton>
                </Toolbar>
            </AppBar>

        <List
            data={items}
            classes={classes}
            onClose={this.onClose} />

        </Dialog>
    )
  }
}

CurriculumEquivalents.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  items: state.student.student_discipline,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCurriculumEquivalents,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CurriculumEquivalents))
