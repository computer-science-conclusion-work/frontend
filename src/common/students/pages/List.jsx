// IMPORTS
// Material-ui
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import PencilIcon from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'

// Externals imports (Dependencies)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Internal imports
import ActionButton from '../../components/ActionButton'
import consts from '../../../consts'
//import If from '../../components/If'
import Paginate from '../../components/Paginate'
import { fetchStudents } from '../StudentsActions'
import { getStudentListData } from '../StudentsReducer'

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
      .fetchStudents(newPage + 1, this.props.filters, this.state.rowsPerPage)
      .then(data => {})
  }

  render() {
    const { classes, items } = this.props
    return (
      <Paper className={classes.content} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '20%' }} align="center">Matrícula</TableCell>
              <TableCell style={{ width: '40%' }}>Nome</TableCell>
              <TableCell style={{ width: '20%' }} align="center">Data de Egresso</TableCell>
              <TableCell style={{ width: '20%' }} align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.data &&
              items.data.map(item => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.registration}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">{`dd/mm/YYYY`}</TableCell>
                  <TableCell align="center">
                    <ActionButton
                      title="Editar"
                      route={`/students/${item.id}/edit`}
                      icon={<PencilIcon />}/>
                    <ActionButton
                      title="Deletar"
                      route={`/students/${item.id}/delete`}
                      icon={<DeleteIcon />}/>
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
)(List)
