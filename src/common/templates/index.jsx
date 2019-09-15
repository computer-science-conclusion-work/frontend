// IMPORTS
// Material-ui
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

// External
import React, { Fragment } from 'react'

// Internal
import MyButton from '../components/MyButton'

export default props => {
    return (
        <Fragment>
            <Grid container justify="center" alignItems="center">
                <Grid item className={props.grow}>
                    <Typography variant="h3">{props.title}</Typography>
                </Grid>
                <Grid item>
                    {props.button}
                    <MyButton
                        route={props.route}
                        icon={props.icon}
                        name="Cadastrar" />
                </Grid>
            </Grid>

            {props.children}
        </Fragment>
    )
}