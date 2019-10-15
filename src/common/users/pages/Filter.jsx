// IMPORTS
// Material-ui
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// External
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Internal
import styles from '../../../resources/theme/default'
import EnhancedComponent from '../../components/EnhancedComponent'
import { fetchUsers } from '../UserActions'

class Filters extends EnhancedComponent {
  state = {
    dirty: false,
    fields: {
      id: '',
      name: '',
    },
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.fetchUsers(null, this.state.fields).then(data => {})
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={this.onSubmit}>
          <ExpansionPanel defaultExpanded={false}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Filtros</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <Grid className={classes.gridContainer} container spacing={2}>
                <Grid item xs>
                  <TextField
                    onChange={this.onChange('id')}
                    label="ID"
                    margin="dense"
                    className={classes.inputFilter}
                    variant="outlined"
                    fullWidth
                    value={this.state.fields.registration}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    onChange={this.onChange('name')}
                    label="Nome"
                    margin="dense"
                    className={classes.inputFilter}
                    variant="outlined"
                    fullWidth
                    value={this.state.fields.name}
                  />
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <Button
                type="submit"
                color="primary"
                size="small"
                className={classes.submit}
              >
                Filtrar
              </Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </form>
      </div>
    )
  }
}

Filters.PropTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        fetchUsers
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Filters))
