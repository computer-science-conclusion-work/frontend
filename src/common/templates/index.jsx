// IMPORTS
// Material-ui
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

// External
import React, { Fragment } from 'react'

export default props => {
    return (
        <Fragment>
            <Grid container justify="center" alignItems="center">
                <Grid item className={props.grow}>
                    <Typography variant="h3">{props.title}</Typography>
                </Grid>
                <Grid item>
                    {props.button}
                </Grid>
            </Grid>

            {props.children}
        </Fragment>
    )
}