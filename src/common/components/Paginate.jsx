// IMPORTS
// Material-ui
import TablePagination from '@material-ui/core/TablePagination';

// External
import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props){
        super(props)
    }

    render()
    {
        return (
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                rowsPerPage={this.props.rowsPerPage}
                count={this.props.rows}
                page={this.props.page}
                component="div"
                labelRowsPerPage='Linhas Por Página'
                labelDisplayedRows={({ from, to, count }) => `Mostrando linhas ${from}-${to} de ${count}`}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={this.props.handleChangePage}
                onChangeRowsPerPage={this.props.handleChangeRowsPerPage} />
        )
    }
}

export default Pagination
