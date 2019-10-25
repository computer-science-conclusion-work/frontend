// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'

// Externals
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/students_median'
import Index from '../../templates/index'
import Graph from './Graph'
import Filter from './Filter'
import { fetchStudentsMedian } from '../StudentsMedianActions'
import { getStudentMedianListData } from '../StudentsMedianReducer'

class StudentMedian extends Component {
  componentDidMount() {
    const { filters } = this.props
    this.props.fetchStudentsMedian(filters)
  }

  render() {
    const { classes, items, students } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Média dos Estudantes" >
        <Filter />

        <Graph classes={classes} items={items} students={students} />
      </Index>
    )
  }
}

StudentMedian.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchStudentsMedian: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getStudentMedianListData(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStudentsMedian,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(StudentMedian))
