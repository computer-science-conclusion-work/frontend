exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/pages/List.js":
/*!*****************************************!*\
  !*** ./src/common/stores/pages/List.js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _main_pages_Paginate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../main/pages/Paginate */ "./src/common/main/pages/Paginate.js");
/* harmony import */ var _StoreActions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../StoreActions */ "./src/common/stores/StoreActions.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../consts */ "./src/consts.js");







var _jsxFileName = "/srv/app/src/common/stores/pages/List.js";
// IMPORTS
// Material UI










 // Externals imports (Dependencies)




 // Internal imports





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
        _this.onChangePage(null, null, 0);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChangePage", function (event, newPage) {
      _this.props.fetchStores(newPage + 1, _this.props.filters, _this.state.rowsPerPage).then(function (data) {});
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
          lineNumber: 52
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Identificador"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Descri\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "CNPJ"), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Frete M\xEDnimo"))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, items && items.data && items.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, item.id), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, item.description), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, item.CNPJ), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, item.min_freight), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_21__["Link"],
          to: "/stores/".concat(item.id, "/edit"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_21__["Link"],
          to: "/stores/".concat(item.id, "/delete"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        })), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
          size: "small",
          component: react_router_dom__WEBPACK_IMPORTED_MODULE_21__["Link"],
          to: "/stores/".concat(item.id, "/list-centers"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_16___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }))));
      }))), react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_main_pages_Paginate__WEBPACK_IMPORTED_MODULE_22__["default"], {
        handleChangeRowsPerPage: this.handleChangeRowsPerPage,
        rowsPerPage: this.state.rowsPerPage,
        rows: items.total,
        page: items.current_page - 1,
        handleChangePage: this.onChangePage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
    filters: state.store.filters
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_20__["bindActionCreators"])({
    fetchStores: _StoreActions__WEBPACK_IMPORTED_MODULE_23__["fetchStores"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapStateToProps, mapDispatchToProps)(List));

/***/ })

};
//# sourceMappingURL=main.a7cdff57d4d633de01be.hot-update.js.map