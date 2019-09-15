// IMPORTS
// Material-ui
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

// External
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <Tooltip title={props.title} placement="top">
            <IconButton
            size="small"
            component={Link}
            to={props.route} >
                {props.icon}
            </IconButton>
        </Tooltip>
    )
}
