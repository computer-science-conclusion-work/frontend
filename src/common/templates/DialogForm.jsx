// IMPORTS
// Material-ui
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

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
                        icon={<CloseIcon />}
                    />
                </Toolbar>
            </AppBar>

            {props.children}
        </Dialog>
    )
}