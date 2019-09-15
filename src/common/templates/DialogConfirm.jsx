// IMPORTS
// Material-ui
import { Grid } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import BackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'

// External
import React from 'react'

// Internal
import MyIconButton from '../components/MyIconButton'
import MyButton from '../components/MyButton'

export default props => {
    return (
        <Dialog
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

            <Typography>
                <Grid container spacing={6} Style="padding: 20px">
                    <Grid item xs>
                        <MyButton 
                            handle={props.handleSubmit}
                            icon={<DeleteIcon className={classes.btnIcon} />}
                            name="Confirmar"/>
                    </Grid>

                    <Grid item xs>
                        <MyButton 
                            handle={props.handleOnClose}
                            icon={<BackIcon className={classes.btnIcon} />}
                            name="Cancelar"/>
                    </Grid>
                </Grid>
            </Typography>
            {props.chldren}
        </Dialog>
    )
}