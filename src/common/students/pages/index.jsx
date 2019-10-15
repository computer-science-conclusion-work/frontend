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
import Index from '../../templates/index'
import MyButton from '../../components/MyButton'
import NewStudent from './New'
import EditStudent from './Edit'
import DeleteStudent from './Delete'
import List from './List'
import Filter from './Filter'
import { fetchStudents } from '../StudentsActions'
import { getStudentListData } from '../StudentsReducer'

class Student extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    const { classes, items } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Estudantes"
        button={<MyButton
                  color="primary"
                  route="/students/new"
                  icon={<SchoolAddIcon className={classes.btnIcon} />}
                  name="Cadastrar"
                />} >
        <Filter />

        <Route path="/students/new" component={NewStudent} />
        <Route path="/students/:id/edit" component={EditStudent} />
        <Route path="/students/:id/delete" component={DeleteStudent} />

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
