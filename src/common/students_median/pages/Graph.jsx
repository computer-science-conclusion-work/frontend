// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'

// Externals imports (Dependencies)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Internal imports
import { getStudentMedianListData } from '../StudentsMedianReducer'

class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, items } = this.props
    var students = items && items.data ? items.data : []
    return (
      <Paper className={classes.content} elevation={1}>
        
      </Paper>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}

List.defaultProps = {
  items: [],
}

const mapStateToProps = state => ({
  ...getStudentMedianListData(state),
})

export default connect(mapStateToProps)(List)
