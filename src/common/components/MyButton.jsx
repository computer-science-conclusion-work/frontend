// IMPORTS
// Material-ui
import Button from '@material-ui/core/Button'

// External
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <Button
            type={props.type}
            size={props.size}
            color={props.color}
            variant="contained"
            component={Link}
            className={props.classes}
            onClick={props.handle}
            to={props.route} >
                {props.icon} {props.name}
        </Button>
    )
}