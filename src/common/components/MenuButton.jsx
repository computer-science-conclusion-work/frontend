// IMPORTS
// Material-ui
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// External
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <ListItem
            button
            component={Link}
            to={props.route}
            onClick={props.handle} >
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.title} />
                {props.expand}
        </ListItem>
    )
}
