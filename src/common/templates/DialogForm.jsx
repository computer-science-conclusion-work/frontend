// IMPORTS
// Material-ui
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

// External
import React from 'react'

// Internal
import MyIconButton from '../components/MyIconButton'

export default props => {
    return (
        <Dialog
            fullScreen
            open={props.open}
            onClose={props.handleClose}
            TransitionComponent={props.transition} >
            <AppBar className={props.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={props.flex}>
                        {props.title}
                    </Typography>
                    <MyIconButton
                        handle={props.handleClose}
                        label="Close"
                        icons={<CloseIcon />}
                    />
                </Toolbar>
            </AppBar>

            {props.chldren}
        </Dialog>
    )
}