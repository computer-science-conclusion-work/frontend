// IMPORTS
// Material-ui
import AppBar from '@material-ui/core/AppBar'
import Menus from '@material-ui/core/Menu'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem'
// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert'
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

// Internal
import config from '../../config'
import { logout } from '../auth/AuthActions'
import styles from '../../resources/theme/menu'
import MenuButton from './MenuButton'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleEdit = this.handleEdit.bind(this)

    this.state = {
      open: false,
      anchorEl: null
    }
  }

  handleClick = () => {
    this.setState({ ...this.state, open: !this.state.open })
  }

  handleMenu(event) {
    this.setState({ ...this.state, anchorEl: event.currentTarget })
  }

  handleEdit() {
    this.setState({ ...this.state, anchorEl: null })
    this.props.history.push(`/my_users/${this.props.user.id}/edit`)
  }

  handleClose() {
    this.setState({ ...this.state, anchorEl: null })
  }

  render() {
    const {
      classes,
      theme,
      open,
      handleDrawerOpen,
      handleDrawerClose,
    } = this.props

    const active = this.props.loading || ''

    return (
      <div>
        <div className={`uil-ring-css ${active}`}>
            <div/>
        </div>
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
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menus
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleEdit}>Editar</MenuItem>
                <MenuItem onClick={this.props.logout}>Logout</MenuItem>
              </Menus>
            </div>
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
            <IconButton onClick={handleDrawerClose}>
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
              route=""
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

const mapStateToProps = state => ({
  user: state.auth.user || [],
  loading: state.main.loadingCircle
})

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
)(withRouter(withStyles(styles)(Menu)))
