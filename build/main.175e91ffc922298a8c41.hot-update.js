exports.id = "main";
exports.modules = {

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
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "@material-ui/icons/PersonAdd");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10__);
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
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_10___default.a, {
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

/***/ })

};
//# sourceMappingURL=main.175e91ffc922298a8c41.hot-update.js.map