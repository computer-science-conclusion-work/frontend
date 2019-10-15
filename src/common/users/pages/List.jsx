// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import PencilIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

// External
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Internal
import ActionButton from '../../components/ActionButton'
import consts from '../../../consts'
import If from '../../components/If'
import Paginate from '../../components/Paginate'
import { fetchUsers } from '../UserActions'
import { getUserListData } from '../UserReducer'

class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rowsPerPage: consts.DEFAULT_PAGINATION,
    }
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value }, () => {
      this.onChangePage(null, null, 0)
    })
  }
  
  onChangePage = (event, newPage) => {
    this.props
      .fetchUsers(newPage + 1, this.props.filters, this.state.rowsPerPage)
      .then(data => {})
  }

  render() {
    const { classes, items } = this.props
    return (
      <Paper className={classes.content} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell align="center">{item.role}</TableCell>
                <TableCell align="center">
                  <If test={item.id != consts.ADMIN_ID}>
                    <ActionButton
                      title="Editar"
                      route={`/my_users/${item.id}/edit`}
                      icon={<PencilIcon />}/>
                    <ActionButton
                      title="Deletar"
                      route={`/users/${item.id}/delete`}
                      icon={<DeleteIcon />}/>
                  </If>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Paginate
          handleChangeRowsPerPage={this.handleChangeRowsPerPage}
          rowsPerPage={this.state.rowsPerPage}
          items={items}
          handleChangePage={this.onChangePage}
        />
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
)(List)
