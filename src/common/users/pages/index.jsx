// IMPORTS
// Material-ui
import withStyles from '@material-ui/core/styles/withStyles'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

// External
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// Internal
import styles from '../../../resources/theme/users'
import Index from '../../templates/index'
import MyButton from '../../components/MyButton'
import NewUser from './New'
import EditUser from './Edit'
import DeleteUser from './Delete'
import List from './List'
import { fetchUsers } from '../UserActions'
import { getUserListData } from '../UserReducer'

class User extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { classes, items } = this.props

    return (
      <Index
        grow={classes.grow}
        title="Usuários"
        button={<MyButton
                  route="/users/new"
                  icon={<PersonAddIcon className={classes.btnIcon} />}
                />} >
        <Route path="/users/new" component={NewUser} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id/delete" component={DeleteUser} />

        <List classes={classes} items={items} />
      </Index>
    )
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  ...getUserListData(state),
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(User))
