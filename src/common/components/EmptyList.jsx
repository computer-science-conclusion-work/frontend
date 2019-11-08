import Grid from '@material-ui/core/Grid'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import WarningIcon from '@material-ui/icons/Warning'
import React from 'react'

export default props => {
  return (
    <TableRow key="emptyFilter">
        <TableCell className={props.tableCell} colSpan={props.colSpan}>
        <Grid
            className={props.gridContainer}
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item>{props.message}</Grid>
            <Grid item>
                <WarningIcon />
            </Grid>
        </Grid>
        </TableCell>
    </TableRow>
  )
}