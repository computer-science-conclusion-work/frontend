// IMPORTS
// Material UI
import Slide from '@material-ui/core/Slide'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import withStyles from '@material-ui/core/styles/withStyles'

// Externals imports (Dependencies)
import React from 'react'
import PropTypes from 'prop-types'

// Internal imports
import EmptyList from '../../../components/EmptyList'
import styles from '../../../../resources/theme/students'
import EnhancedComponent from '../../../components/EnhancedComponent'

function Transition(props) {
  return <Slide direction="down" {...props} />
}

class List extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      to_attend: [],
    },
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...nextProps,
        fields: {
          to_attend: nextProps.data,
        }
      })
    }
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const { classes } = this.props
    const { to_attend } = this.state.fields
    return (
      <Table>
          <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Pseudônimo</TableCell>
            <TableCell>Período</TableCell>
            <TableCell>Carga de Trabalho</TableCell>
            <TableCell>Créditos</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {to_attend.length ? to_attend.map((item, index) => (
              <TableRow key={item.id}>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.alias}</TableCell>
                  <TableCell>{`${item.period}°`}</TableCell>
                  <TableCell>
                    {item.pivot && item.pivot.workload ?
                    item.pivot.workload : '-'}
                  </TableCell>
                  <TableCell>
                    {item.pivot && item.pivot.credits ?
                    item.pivot.credits : '-'}
                  </TableCell>
              </TableRow>
          )):
          <EmptyList tableCell={classes.tableCell}
            colSpan={6}
            gridContainer={classes.gridContainer}
            message={'Lista Vazia'} /> }
          </TableBody>
      </Table>
    )
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(List)
