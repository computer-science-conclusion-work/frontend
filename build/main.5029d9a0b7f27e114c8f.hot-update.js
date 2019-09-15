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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Store */ "@material-ui/icons/Store");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "@material-ui/icons/LocalGroceryStore");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__);





var _jsxFileName = "/srv/app/src/common/components/Menu.js";


















var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
  };
};

var Menu =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Menu, _Component);

  function Menu() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Menu).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_18__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        position: "fixed",
        elevation: 1,
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
        variant: "h6",
        color: "inherit",
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _config__WEBPACK_IMPORTED_MODULE_21__["default"].title))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.drawer,
        variant: "permanent",
        classes: {
          paper: classes.drawerPaper
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement("div", {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"],
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
        primary: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"],
        to: "/users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
        primary: "Usu\xE1rios",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"],
        to: "/stores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
        primary: "Lojistas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8___default.a, {
        button: true,
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_20__["Link"],
        to: "/suppliers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["ListItemIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a, {
        primary: "Fornecedores",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

Menu.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default()(styles)(Menu)));

/***/ }),

/***/ "./src/common/main/pages/Paginate.js":
/*!*******************************************!*\
  !*** ./src/common/main/pages/Paginate.js ***!
  \*******************************************/
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/srv/app/src/common/main/pages/Paginate.js";



var Pagination =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Pagination, _Component);

  function Pagination(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pagination);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Pagination).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pagination, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_5___default.a, {
        rowsPerPageOptions: [5, 10, 25],
        rowsPerPage: this.props.rowsPerPage,
        count: this.props.rows,
        page: this.props.page,
        component: "div",
        labelRowsPerPage: "Linhas Por P\xE1gina",
        labelDisplayedRows: function labelDisplayedRows(_ref) {
          var from = _ref.from,
              to = _ref.to,
              count = _ref.count;
          return "Mostrando linhas ".concat(from, "-").concat(to, " de ").concat(count);
        },
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.props.handleChangePage,
        onChangeRowsPerPage: this.props.handleChangeRowsPerPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/common/suppliers/SuppliersActions.js":
/*!**************************************************!*\
  !*** ./src/common/suppliers/SuppliersActions.js ***!
  \**************************************************/
/*! exports provided: REMOVE_SUPPLIER, SUBMIT_SUPPLIER, FETCH_SUPPLIER, EDIT_SUPPLIER, fetchSuppliers, edit, post, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUPPLIER", function() { return REMOVE_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_SUPPLIER", function() { return SUBMIT_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUPPLIER", function() { return FETCH_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUPPLIER", function() { return EDIT_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuppliers", function() { return fetchSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");





var REMOVE_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('REMOVE_SUPPLIER');
var SUBMIT_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SUBMIT_SUPPLIER');
var FETCH_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_SUPPLIER');
var EDIT_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('EDIT_SUPPLIER');
function fetchSuppliers(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_SUPPLIER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier?filters=") + JSON.stringify(filters) + "&&page=" + page + "&&rows=" + (rows || _consts__WEBPACK_IMPORTED_MODULE_4__["default"].DEFAULT_PAGINATION), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_SUPPLIER.SUCCESS, {
        data: resp.data,
        filters: filters
      }));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_SUPPLIER, e));
    });
  };
}
function edit(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_SUPPLIER.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier/").concat(id)).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_SUPPLIER.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(EDIT_SUPPLIER, e));
    });
  };
}
function post(values) {
  return submit(values, 'post');
}
function update(values) {
  return submit(values, 'put');
}

function submit(values, method) {
  var id = values.id ? "/".concat(values.id) : '';
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_USER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a[method]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier").concat(id), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_USER.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SUBMIT_USER, e));
    });
  };
}

function remove(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(REMOVE_USER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/api/user/").concat(id)).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(REMOVE_USER.SUCCESS, data));
      dispatch(fetchUsers());
    })["catch"](function (e) {
      return Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(REMOVE_USER.FAILURE, e);
    });
  };
}

/***/ }),

/***/ "./src/common/suppliers/SuppliersReducer.js":
/*!**************************************************!*\
  !*** ./src/common/suppliers/SuppliersReducer.js ***!
  \**************************************************/
/*! exports provided: default, getSupplierListData, getEditingSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupplierListData", function() { return getSupplierListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingSupplier", function() { return getEditingSupplier; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuppliersActions */ "./src/common/suppliers/SuppliersActions.js");


var INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingSupplier: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUPPLIER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.payload.data.data.items,
        // roles: action.payload.data.filterRoles,
        // totalSize: action.payload.data.totalSize,
        // page: action.payload.data.page,
        // sizePerPage: action.payload.data.sizePerPage,
        filters: action.payload.filters
      });

    case _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_SUPPLIER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        editingSupplier: action.payload
      });

    case 'USER_INITIALIZE':
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        roles: action.payload.data.roles,
        stores: action.payload.data.stores,
        branches: action.payload.data.branches,
        role: action.payload.data.role
      });

    default:
      return state;
  }
});
var getSupplierListData = function getSupplierListData(state) {
  return {
    items: state.supplier.items,
    roles: state.supplier.roles,
    totalSize: state.supplier.totalSize,
    page: state.supplier.page,
    sizePerPage: state.supplier.sizePerPage
  };
};
var getEditingSupplier = function getEditingSupplier(state) {
  return state.supplier.editingSupplier;
};

/***/ }),

/***/ "./src/common/suppliers/pages/DistributionCenters/List.js":
/*!****************************************************************!*\
  !*** ./src/common/suppliers/pages/DistributionCenters/List.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../resources/theme/users */ "./src/resources/theme/users.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");
/* harmony import */ var _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../distributionCenters/DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");
/* harmony import */ var _distributionCenters_DistributionCentersReducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../distributionCenters/DistributionCentersReducer */ "./src/common/distributionCenters/DistributionCentersReducer.js");









var _jsxFileName = "/srv/app/src/common/suppliers/pages/DistributionCenters/List.js";
























function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
    direction: "down"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }));
}

var List =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(List, _EnhancedComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      dirty: false,
      fields: {
        CD: []
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChange", function (name) {
      return function (event) {
        var localState = _this.state.fields.CD;
        localState[name].status = event.target.checked;

        _this.setState({
          fields: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.state.fields, {
            localState: localState
          })
        });
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onSubmit", function (e) {
      e.preventDefault();
      _this.props.onSubmit && _this.props.onSubmit(_this.state.fields.CD);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onClose", function () {
      _this.props.onClose && _this.props.onClose();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(List, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.state.dirty && nextProps.data) {
        this.setState({
          fields: {
            CD: nextProps.data
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
        open: data !== null,
        fullScreen: true,
        onClose: this.onClose,
        TransitionComponent: Transition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Editar Centros de Distribui\xE7\xE3o associados ao Fornecedor"), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "inherit",
        onClick: this.onClose,
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })))), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "Ativo/Inativo"), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Identificador"), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Descri\xE7\xE3o"))), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, this.state.fields.CD.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19___default.a, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_23___default.a, {
          checked: _this2.state.fields.CD[index].status,
          onChange: _this2.handleChange(index),
          value: item.id,
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        })), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, item.id), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, item.description));
      }))), react__WEBPACK_IMPORTED_MODULE_25___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        type: "submit",
        variant: "contained",
        color: "primary",
        className: classes.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Enviar")));
    }
  }]);

  return List;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_29__["default"]);

List.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_24___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_28__["default"])(List));

/***/ }),

/***/ "./src/common/suppliers/pages/DistributionCenters/index.js":
/*!*****************************************************************!*\
  !*** ./src/common/suppliers/pages/DistributionCenters/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./List */ "./src/common/suppliers/pages/DistributionCenters/List.js");
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../resources/theme/users */ "./src/resources/theme/users.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");
/* harmony import */ var _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../distributionCenters/DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");








var _jsxFileName = "/srv/app/src/common/suppliers/pages/DistributionCenters/index.js";











function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_8___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    direction: "down"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
}

var List =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(List, _EnhancedComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(List)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      dirty: false,
      fields: {}
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onSubmit", function (values) {
      _this.props.saveDCSupplier(values, _this.props.match.params.id).then(function (data) {
        if (data && data.code === 200) {
          _this.props.history.push('/suppliers');
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onClose", function () {
      _this.props.history.push('/suppliers');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchDistributionCentersPerSuppliers(this.props.match.params.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          items = _this$props.items;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_14__["default"], {
        data: items,
        classes: classes,
        onClose: this.onClose,
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
    }
  }]);

  return List;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_16__["default"]);

List.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    items: state.distributioncenter.items_supplier
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])({
    fetchDistributionCentersPerSuppliers: _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_17__["fetchDistributionCentersPerSuppliers"],
    saveDCSupplier: _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_17__["saveDCSupplier"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_15__["default"])(List)));

/***/ }),

/***/ "./src/common/suppliers/pages/List.js":
/*!********************************************!*\
  !*** ./src/common/suppliers/pages/List.js ***!
  \********************************************/
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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/CalendarViewDay */ "@material-ui/icons/CalendarViewDay");
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _SuppliersActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../SuppliersActions */ "./src/common/suppliers/SuppliersActions.js");
/* harmony import */ var _main_pages_Paginate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../main/pages/Paginate */ "./src/common/main/pages/Paginate.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");







var _jsxFileName = "/srv/app/src/common/suppliers/pages/List.js";



















var List =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(List, _Component);

  function List(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, List);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(List).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChangeRowsPerPage", function (event) {
      _this.setState({
        rowsPerPage: event.target.value
      }, function () {
        _this.onMovePage(null, null, 0);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onMovePage", function (event, newPage) {
      _this.props.fetchSuppliers(newPage + 1, _this.props.filters, _this.state.rowsPerPage).then(function (data) {});
    });

    _this.state = {
      rowsPerPage: _consts__WEBPACK_IMPORTED_MODULE_24__["default"].DEFAULT_PAGINATION
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(List, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          items = _this$props.items;
      return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.content,
        elevation: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Identificador"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "CNPJ"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "A\xE7\xF5es"))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, items && items.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, item.id), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, item.description), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, item.CNPJ), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Link"],
          to: "/suppliers/".concat(item.id, "/edit"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Link"],
          to: "/suppliers/".concat(item.id, "/delete"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_19__["Link"],
          to: "/suppliers/".concat(item.id, "/list-centers"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }))));
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_main_pages_Paginate__WEBPACK_IMPORTED_MODULE_21__["default"], {
        handleChangeRowsPerPage: this.handleChangeRowsPerPage,
        rowsPerPage: this.state.rowsPerPage,
        rows: items.total,
        page: items.current_page - 1,
        handleChangePage: this.onMovePage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_18__["Component"]);

List.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.array.isRequired
};
List.defaultProps = {
  items: []
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    filters: state.supplier.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_23__["bindActionCreators"])({
    fetchSuppliers: _SuppliersActions__WEBPACK_IMPORTED_MODULE_20__["fetchSuppliers"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_22__["connect"])(mapStateToProps, mapDispatchToProps)(List)); //export default List

/***/ }),

/***/ "./src/common/suppliers/pages/index.js":
/*!*********************************************!*\
  !*** ./src/common/suppliers/pages/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "@material-ui/icons/LocalGroceryStore");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../resources/theme/users */ "./src/resources/theme/users.js");
/* harmony import */ var _SuppliersActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../SuppliersActions */ "./src/common/suppliers/SuppliersActions.js");
/* harmony import */ var _SuppliersReducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../SuppliersReducer */ "./src/common/suppliers/SuppliersReducer.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Edit */ "./src/common/suppliers/pages/Edit.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./List */ "./src/common/suppliers/pages/List.js");
/* harmony import */ var _pages_DistributionCenters_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/DistributionCenters/index */ "./src/common/suppliers/pages/DistributionCenters/index.js");
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./New */ "./src/common/suppliers/pages/New.js");






var _jsxFileName = "/srv/app/src/common/suppliers/pages/index.js";


















var Supplier =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Supplier, _Component);

  function Supplier() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Supplier);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Supplier).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Supplier, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchSuppliers();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          items = _this$props.items;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Fornecedores")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: "medium",
        color: "primary",
        variant: "contained",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"],
        to: "/suppliers/new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.btnIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), " Cadastrar"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/suppliers/new",
        component: _New__WEBPACK_IMPORTED_MODULE_22__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/suppliers/:id/edit",
        component: _Edit__WEBPACK_IMPORTED_MODULE_19__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/suppliers/:id/list-centers",
        component: _pages_DistributionCenters_index__WEBPACK_IMPORTED_MODULE_21__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_20__["default"], {
        classes: classes,
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }]);

  return Supplier;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

Supplier.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  fetchSuppliers: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_SuppliersReducer__WEBPACK_IMPORTED_MODULE_18__["getSupplierListData"])(state));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_15__["bindActionCreators"])({
    fetchSuppliers: _SuppliersActions__WEBPACK_IMPORTED_MODULE_17__["fetchSuppliers"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_16__["default"])(Supplier)));

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  DEFAULT_PAGINATION: 10
});

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/LocalGroceryStore":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/LocalGroceryStore" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalGroceryStore");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/Store":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Store" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ })

};
//# sourceMappingURL=main.5029d9a0b7f27e114c8f.hot-update.js.map