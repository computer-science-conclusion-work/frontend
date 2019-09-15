exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/pages/distributioncenters/List.js":
/*!*************************************************************!*\
  !*** ./src/common/stores/pages/distributioncenters/List.js ***!
  \*************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../resources/theme/users */ "./src/resources/theme/users.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");
/* harmony import */ var _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../distributionCenters/DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");
/* harmony import */ var _distributionCenters_DistributionCentersReducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../distributionCenters/DistributionCentersReducer */ "./src/common/distributionCenters/DistributionCentersReducer.js");









var _jsxFileName = "/srv/app/src/common/stores/pages/distributioncenters/List.js";
// IMPORTS
// Material UI














 // Externals imports (Dependencies)




 // Internal imports






function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_8___default()({
    direction: "down"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
        open: data !== null,
        fullScreen: true,
        onClose: this.onClose,
        TransitionComponent: Transition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Centros de Distribui\xE7\xE3o do Lojista X"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        color: "inherit",
        onClick: this.onClose,
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_21___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Ativo/Inativo"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Identificador"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Descri\xE7\xE3o"))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, this.state.fields.CD.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19___default.a, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_23___default.a, {
          checked: _this2.state.fields.CD[index].status,
          onChange: _this2.handleChange(index),
          value: item.id,
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, item.id), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, item.description));
      }))), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        type: "submit",
        variant: "contained",
        color: "primary",
        className: classes.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "Enviar")));
    }
  }]);

  return List;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_29__["default"]);

List.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.object.isRequired //roles: PropTypes.array.isRequired,

};

var mapStateToProps = function mapStateToProps(state) {
  return {//roles: state.user.roles || [],
    //...getEditingDistributionCenters(state)
    //items: state.distributioncenter.items_supplier
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_26__["bindActionCreators"])({
    fetchDistributionCentersPerSuppliers: _distributionCenters_DistributionCentersActions__WEBPACK_IMPORTED_MODULE_30__["fetchDistributionCentersPerSuppliers"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_16___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_28__["default"])(List)));

/***/ })

};
//# sourceMappingURL=main.91d7ead7741f96198494.hot-update.js.map