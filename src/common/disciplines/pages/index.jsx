// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import PropTypes from 'prop-types'

// Externals
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/disciplines'
import Index from '../../templates/index'
import MyButton from '../../components/MyButton'
import NewDiscipline from './New'
import EditDiscipline from './Edit'
import DeleteDiscipline from './Delete'
import List from './List'
import Filter from './Filter'
import { fetchDisciplines } from '../DisciplinesActions'
import { getDisciplineListData } from '../DisciplinesReducer'

class Discipline extends Component {
  componentDidMount() {
    const { filters } = this.props
    this.props.fetchDisciplines(null, filters)
  }

  render() {
    const { classes, items } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Disciplinas"
        button={<MyButton
                  color="primary"
                  size="medium"
                  route="/disciplines/new"
                  icon={<LibraryBooksIcon className={classes.btnIcon} />}
                  name="Cadastrar"
                />} >
        <Filter />

        <Route path="/disciplines/new" component={NewDiscipline} />
        <Route path="/disciplines/:id/edit" component={EditDiscipline} />
        <Route path="/disciplines/:id/delete" component={DeleteDiscipline} />

        <List classes={classes} items={items} />
      </Index>
    )
  }
}

Discipline.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchDisciplines: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getDisciplineListData(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchDisciplines,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Discipline))
