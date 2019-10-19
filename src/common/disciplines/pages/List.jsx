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

// Externals imports (Dependencies)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Internal imports
import ActionButton from '../../components/ActionButton'
import consts from '../../../consts'
import EmptyList from '../../components/EmptyList'
//import If from '../../components/If'
import Paginate from '../../components/Paginate'
import { fetchDisciplines } from '../DisciplinesActions'
import { getDisciplineListData } from '../DisciplinesReducer'

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
      .fetchDisciplines(newPage + 1, this.props.filters, this.state.rowsPerPage)
      .then(data => {})
  }

  render() {
    const { classes, items } = this.props
    var disciplines = items && items.data ? items.data : []
    return (
      <Paper className={classes.content} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '20%' }}>Código</TableCell>
              <TableCell style={{ width: '20%' }}>Nome</TableCell>
              <TableCell style={{ width: '20%' }} align="center">Pseudônimo</TableCell>
              <TableCell style={{ width: '20%' }} align="center">Período</TableCell>
              <TableCell style={{ width: '20%' }} align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              disciplines ? disciplines.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">{item.alias}</TableCell>
                  <TableCell align="center">{`${item.period}°`}</TableCell>
                  <TableCell align="center">
                    <ActionButton
                      title="Editar"
                      route={`/disciplines/${item.id}/edit`}
                      icon={<PencilIcon />}/>
                    <ActionButton
                      title="Deletar"
                      route={`/disciplines/${item.id}/delete`}
                      icon={<DeleteIcon />}/>
                  </TableCell>
                </TableRow>
              )) :
              <EmptyList tableCell={classes.tableCell}
                colSpan={5}
                gridContainer={classes.gridContainer}
                message={'Lista Vazia'} /> 
            }
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
)(List)
