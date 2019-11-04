// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import SchoolAddIcon from '@material-ui/icons/School'
import PropTypes from 'prop-types'

// Externals
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/students'
import MyButton from '../../components/MyButton'

import Index from '../../templates/index'
import NewStudent from './New'
import EditStudent from './Edit'
import DeleteStudent from './Delete'
import List from './List'
import Filter from './Filter'

import Curriculum from './curriculum/index'
import CurriculumEquivalents from './curriculum_equivalents/index'
import Equivalents from './equivalents/index'
import ExtraCurriculum from './extra_curriculum/index'
import Ongoing from './ongoing/index'
import ToAttend from './to_attend/index'

import { fetchStudents } from '../StudentsActions'
import { getStudentListData } from '../StudentsReducer'

class Student extends Component {
  componentDidMount() {
    const { filters } = this.props
    this.props.fetchStudents(null, filters)
  }

  render() {
    const { classes, items } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Estudantes"
        button={<MyButton
                  color="primary"
                  size="medium"
                  route="/students/new"
                  icon={<SchoolAddIcon className={classes.btnIcon} />}
                  name="Cadastrar"
                />} >
        <Filter />

        <Route path="/students/new" component={NewStudent} />
        <Route path="/students/:id/edit" component={EditStudent} />
        <Route path="/students/:id/delete" component={DeleteStudent} />

        <Route path="/students/:id/curriculum" component={Curriculum} />
        <Route path="/students/:id/curriculum_equivalents" component={CurriculumEquivalents} />
        <Route path="/students/:id/equivalents" component={Equivalents} />
        <Route path="/students/:id/extra_curriculum" component={ExtraCurriculum} />
        <Route path="/students/:id/ongoing" component={Ongoing} />
        <Route path="/students/:id/to_attend" component={ToAttend} />

        <List classes={classes} items={items} />
      </Index>
    )
  }
}

Student.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchStudents: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getStudentListData(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchStudents,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Student))
