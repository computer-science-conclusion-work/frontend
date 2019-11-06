// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

// Externals
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/students_walking'
import Index from '../../templates/index'
import Graph from './Graph'
import Filter from './Filter'
import { fetchStudentsWalking } from '../StudentsWalkingActions'
import { getStudentWalkingListData } from '../StudentsWalkingReducer'

class StudentWalking extends Component {
  componentDidMount() {
    const { filters } = this.props
    //this.props.fetchStudentsWalking(filters)
  }

  render() {
    const { classes, items, students } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Caminhamento dos Estudantes" >
        <Filter />

        <Graph classes={classes} items={items} students={students} />
      </Index>
    )
  }
}

StudentWalking.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchStudentsWalking: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getStudentWalkingListData(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        fetchStudentsWalking,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(StudentWalking))
