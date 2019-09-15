// IMPORTS
// Material-ui
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import OpenIcon from '@material-ui/icons/OpenInNew'
import SchoolIcon from '@material-ui/icons/School'
import PersonIcon from '@material-ui/icons/Person'

// External
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// Internal
import config from '../../config'
import { logout } from '../auth/AuthActions'
import styles from '../../resources/theme/menu'
import MenuButton from './MenuButton'

class Menu extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const {
      classes,
      theme,
      open,
      handleDrawerOpen,
      handleDrawerClose,
    } = this.props

    return (
      <div>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })} >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)} >
              <MenuIcon />
            </IconButton>
            <div className={classes.grow}>
              {/* <img className={classes.logo} src="/img/logo.png" /> */}
              <Typography variant="h6" color="inherit" noWrap>
                {config.title}
              </Typography>
            </div>
            <Button
              className={classes.btnLogout}
              onClick={this.props.logout}
              color="inherit" >
              Sair
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }} >
          <div className={classes.drawerHeader}>
            <IconButton light onClick={handleDrawerClose}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.listDrawer}>
            <MenuButton 
              route="/"
              handle={this.props.handleDrawerClose}
              icon={<HomeIcon />}
              title="Home"/>
            <MenuButton
              handle={this.handleClick}
              icon={<OpenIcon />}
              title="Cadastros Básicos"
              expand={this.state.open ? <ExpandLess /> : <ExpandMore />}/>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <MenuButton
                  route="/users"
                  handle={this.props.handleDrawerClose}
                  icon={<PersonIcon />}
                  title="Usuários" />
                <MenuButton
                  route="/students"
                  handle={this.props.handleDrawerClose}
                  icon={<SchoolIcon />}
                  title="Estudantes" />
              </List>
            </Collapse>
          </List>
        </Drawer>
      </div>
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ user: state.auth.user || [] })

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Menu))
