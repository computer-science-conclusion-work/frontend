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
import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Internal
import ActionButton from '../../components/ActionButton'
import consts from '../../../consts'
import If from '../../components/If'

class List extends Component {
  render() {
    const { classes, items } = this.props
    return (
      <Paper className={classes.content} elevation={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>
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

export default List
