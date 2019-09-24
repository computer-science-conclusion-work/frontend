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
            size="medium"
            color={props.color}
            variant="contained"
            component={Link}
            onClick={props.handle}
            to={props.route} >
                {props.icon} {props.name}
        </Button>
    )
}