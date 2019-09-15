exports.id = "main";
exports.modules = {

/***/ "./src/common/main/routes.js":
/*!***********************************!*\
  !*** ./src/common/main/routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_pages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/pages/index */ "./src/common/users/pages/index.js");
/* harmony import */ var _stores_pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/pages/index */ "./src/common/stores/pages/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Home */ "./src/common/main/pages/Home.js");
var _jsxFileName = "/srv/app/src/common/main/routes.js";






var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/users",
    component: _users_pages_index__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/stores",
    component: _stores_pages_index__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Routes));

/***/ }),

/***/ "./src/common/stores/pages/Edit.js":
/*!*****************************************!*\
  !*** ./src/common/stores/pages/Edit.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/stores/pages/List.js":
/*!*****************************************!*\
  !*** ./src/common/stores/pages/List.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/stores/pages/New.js":
/*!****************************************!*\
  !*** ./src/common/stores/pages/New.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/stores/pages/index.js":
/*!******************************************!*\
  !*** ./src/common/stores/pages/index.js ***!
  \******************************************/
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
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "@material-ui/icons/PersonAdd");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../resources/theme/users */ "./src/resources/theme/users.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../UserActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../UserReducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Edit */ "./src/common/stores/pages/Edit.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Edit__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./List */ "./src/common/stores/pages/List.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./New */ "./src/common/stores/pages/New.js");
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_New__WEBPACK_IMPORTED_MODULE_20__);






var _jsxFileName = "/srv/app/src/common/stores/pages/index.js";
// IMPORTS
// Material UI




 // Externals imports (Dependencies)





 // Material UI








var User =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(User, _Component);

  function User() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, User);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(User).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(User, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          items = _this$props.items;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Usu\xE1rios")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: "medium",
        color: "primary",
        variant: "contained",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Link"],
        to: "/users/new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.btnIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), " Cadastrar"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        path: "/users/new",
        component: _New__WEBPACK_IMPORTED_MODULE_20___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        path: "/users/:id/edit",
        component: _Edit__WEBPACK_IMPORTED_MODULE_18___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_19___default.a, {
        classes: classes,
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

User.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object.isRequired,
  fetchUsers: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, !(function webpackMissingModule() { var e = new Error("Cannot find module '../UserReducer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(state));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])({
    fetchUsers: !(function webpackMissingModule() { var e = new Error("Cannot find module '../UserActions'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_16__["default"])(User)));

/***/ })

};
//# sourceMappingURL=main.22dcd7fe9c599a74b063.hot-update.js.map