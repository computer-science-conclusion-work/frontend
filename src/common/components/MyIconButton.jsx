// IMPORTS
// Material-ui
import IconButton from '@material-ui/core/IconButton'

// External
import React from 'react'

export default props => {
    return (
        <IconButton
            color="inherit"
            onClick={props.handle}
            aria-label={props.label} >
            {props.icon}
        </IconButton>
    )
}