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
      extra_curriculum: [],
    },
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data) {
      return ({
        ...nextProps,
        fields: {
          extra_curriculum: nextProps.data,
        }
      })
    }
  }

  onClose = () => {
    this.props.onClose && this.props.onClose()
  }

  render() {
    const { classes } = this.props
    const { extra_curriculum } = this.state.fields
    return (
        <Table>
            <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Disciplina</TableCell>
              <TableCell>Pseudônimo</TableCell>
              <TableCell>Período</TableCell>
              <TableCell>Ano/Semestre</TableCell>
              <TableCell>Carga de Trabalho</TableCell>
              <TableCell>Créditos</TableCell>
              <TableCell>Nota</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {extra_curriculum.length ? extra_curriculum.map((item, index) => (
                <TableRow key={item.id}>
                    <TableCell>{item.code}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.alias}</TableCell>
                    <TableCell>{`${item.period}°`}</TableCell>
                    <TableCell>
                      {item.pivot && item.pivot.year_semester ?
                      item.pivot.year_semester : '-'}
                    </TableCell>
                    <TableCell>
                      {item.pivot && item.pivot.workload ?
                      item.pivot.workload : '-'}
                    </TableCell>
                    <TableCell>
                      {item.pivot && item.pivot.credits ?
                      item.pivot.credits : '-'}
                    </TableCell>
                    <TableCell>
                      {item.pivot && item.pivot.note ?
                        item.pivot.note : '-'}
                    </TableCell>
                </TableRow>
            )):
              <EmptyList tableCell={classes.tableCell}
                colSpan={8}
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
