exports.id = "main";
exports.modules = {

/***/ "./src/common/components/Menu.js":
/*!***************************************!*\
  !*** ./src/common/components/Menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Store */ "@material-ui/icons/Store");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "@material-ui/icons/LocalGroceryStore");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/LocalShipping */ "@material-ui/icons/LocalShipping");
/* harmony import */ var _material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_SwapVert__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/SwapVert */ "@material-ui/icons/SwapVert");
/* harmony import */ var _material_ui_icons_SwapVert__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SwapVert__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _auth_AuthActions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../auth/AuthActions */ "./src/common/auth/AuthActions.js");








var _jsxFileName = "/srv/app/src/common/components/Menu.js";
































var drawerWidth = 250;

var styles = function styles(theme) {
  return {
    logo: {
      width: 110
    },
    grow: {
      flexGrow: 1
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    btnLogout: {
      marginRight: 20
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_7___default()({
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px'
    }, theme.mixins.toolbar, {
      justifyContent: 'flex-end',
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    }),
    listDrawer: {
      paddingTop: 0,
      zoom: 0.99
    }
  };
};

var Menu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      open: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          open = _this$props.open,
          handleDrawerOpen = _this$props.handleDrawerOpen,
          handleDrawerClose = _this$props.handleDrawerClose;
      return react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_32___default()(classes.appBar, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, classes.appBarShift, open)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_28___default.a, {
        disableGutters: !open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_32___default()(classes.menuButton, open && classes.hide),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement("div", {
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_27___default.a, {
        variant: "h6",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _config__WEBPACK_IMPORTED_MODULE_38__["default"].title)), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.btnLogout,
        onClick: this.props.logout,
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Sair"))), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: open,
        classes: {
          paper: classes.drawerPaper
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement("div", {
        className: classes.drawerHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        light: true,
        onClick: handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_30___default.a, {
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }))), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.listDrawer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        primary: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_23___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        inset: true,
        primary: "Cadastros B\xE1sicos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), this.state.open ? react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_24___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }) : react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_25___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_26___default.a, {
        "in": this.state.open,
        timeout: "auto",
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_13___default.a, {
        component: "div",
        disablePadding: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        inset: true,
        primary: "Usu\xE1rios",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        inset: true,
        primary: "Lojistas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/suppliers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        primary: "Fornecedores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/distributioncenters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_SwapVert__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        primary: "Centros de Distribui\xE7\xE3o",
        onClick: this.props.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_36__["Link"],
        to: "/fleet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_LocalShipping__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_15___default.a, {
        primary: "Frotistas",
        onClick: this.props.handleDrawerClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      })))))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_34__["Component"]);

Menu.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.auth.user || []
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_37__["bindActionCreators"])({
    logout: _auth_AuthActions__WEBPACK_IMPORTED_MODULE_39__["logout"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_35__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_29___default()(styles)(Menu)));

/***/ }),

/***/ "@material-ui/icons/StarBorder":
false,

/***/ "@material-ui/icons/SwapVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/SwapVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SwapVert");

/***/ })

};
//# sourceMappingURL=main.0c4a9ea5a6b9d29acca3.hot-update.js.map