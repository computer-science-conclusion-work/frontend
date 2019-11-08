import Grid from '@material-ui/core/Grid'
import WarningIcon from '@material-ui/icons/Warning'
import React from 'react'

export default props => {

    return (
        <Grid
            className={props.background}
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
    )
}