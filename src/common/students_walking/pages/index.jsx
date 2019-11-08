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
import If from '../../components/If'
import EmptyComponent from '../../components/EmptyComponent'
import Index from '../../templates/index'
import Graph from './Graph'
import Filter from './Filter'
import { fetchStudentsWalking } from '../StudentsWalkingActions'
import { getStudentWalkingListData } from '../StudentsWalkingReducer'

class StudentWalking extends Component {
  render() {
    const { classes, items, filters } = this.props
    return (
      <Index
        grow={classes.grow}
        title="Caminhamento dos Estudantes" >
        <Filter />

        {
        items && items.length ?
          <Graph classes={classes} items={items} />
        :
          <EmptyComponent background={classes.background}
            colSpan={5}
            gridContainer={classes.gridContainer}
            message={'É necessário filtrar um aluno'}
          />
        }
      </Index>
    )
  }
}

StudentWalking.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchStudentsWalking: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
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
