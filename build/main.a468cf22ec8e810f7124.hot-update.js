exports.id = "main";
exports.modules = {

/***/ "./src/common/distributionCenters/pages/Delete.js":
/*!********************************************************!*\
  !*** ./src/common/distributionCenters/pages/Delete.js ***!
  \********************************************************/
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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _resources_theme_default__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../resources/theme/default */ "./src/resources/theme/default.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");
/* harmony import */ var _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");
/* harmony import */ var _DistributionCentersReducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../DistributionCentersReducer */ "./src/common/distributionCenters/DistributionCentersReducer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__);








var _jsxFileName = "/srv/app/src/common/distributionCenters/pages/Delete.js";
// IMPORTS
// Material UI










 // Externals imports (Dependencies)




 // Internal imports







function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    direction: "down"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }));
}

var DeleteFleet =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DeleteFleet, _EnhancedComponent);

  function DeleteFleet() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DeleteFleet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DeleteFleet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onSubmit", function () {
      var fleet = _this.props.fleet;

      _this.props.destroy(fleet.id).then(function (data) {
        if (data && data.code === 200) {
          _this.props.history.push('/distributioncenters');
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onClose", function () {
      _this.props.history.push('/distributioncenters');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DeleteFleet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.edit(this.props.match.params.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          fleet = _this$props.fleet;
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
        open: fleet !== null,
        onClose: this.onClose,
        TransitionComponent: Transition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Excluir Frotista"), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "inherit",
        onClick: this.onClose,
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
        container: true,
        spacing: 6,
        Style: "padding: 20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: function onClick() {
          return _this2.onSubmit();
        },
        className: classes.colorDanger,
        size: "medium" //color="secondary"
        ,
        variant: "contained",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.btnIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), " Confirmar")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onClick: function onClick() {
          return _this2.onClose();
        },
        size: "medium",
        color: "primary",
        variant: "contained",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default.a, {
        className: classes.btnIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), " Cancelar")))));
    }
  }]);

  return DeleteFleet;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_24__["default"]);

DeleteFleet.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.object.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_22___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.fleet.roles || [],
    fleet: getEditingFleet(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_21__["bindActionCreators"])({
    update: _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_25__["update"],
    destroy: _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_25__["destroy"],
    edit: _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_25__["edit"],
    fetchFleet: fetchFleet
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_17___default()(_resources_theme_default__WEBPACK_IMPORTED_MODULE_23__["default"])(DeleteFleet)));

/***/ }),

/***/ "./src/common/distributionCenters/pages/index.js":
/*!*******************************************************!*\
  !*** ./src/common/distributionCenters/pages/index.js ***!
  \*******************************************************/
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
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Business */ "@material-ui/icons/Business");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");
/* harmony import */ var _DistributionCentersReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../DistributionCentersReducer */ "./src/common/distributionCenters/DistributionCentersReducer.js");
/* harmony import */ var _resources_theme_distributionCenters__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../resources/theme/distributionCenters */ "./src/resources/theme/distributionCenters.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Edit */ "./src/common/distributionCenters/pages/Edit.js");
/* harmony import */ var _Delete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Delete */ "./src/common/distributionCenters/pages/Delete.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Filters */ "./src/common/distributionCenters/pages/Filters.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./List */ "./src/common/distributionCenters/pages/List.js");
/* harmony import */ var _New__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./New */ "./src/common/distributionCenters/pages/New.js");
/* harmony import */ var _fleets_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fleets/index */ "./src/common/distributionCenters/pages/fleets/index.js");






var _jsxFileName = "/srv/app/src/common/distributionCenters/pages/index.js";
// IMPORTS
// Material UI





 // Externals imports (Dependencies)




 // Internal imports











var DistributionCenter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DistributionCenter, _Component);

  function DistributionCenter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DistributionCenter);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(DistributionCenter).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DistributionCenter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchDistributionCenters();
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
          lineNumber: 36
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        className: classes.grow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
        variant: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Centros de Distribui\xE7\xE3o")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: "medium",
        color: "primary",
        variant: "contained",
        component: react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Link"],
        to: "/distributioncenters/new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.btnIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), " Cadastrar"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/distributioncenters/new",
        component: _New__WEBPACK_IMPORTED_MODULE_23__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/distributioncenters/:id/edit",
        component: _Edit__WEBPACK_IMPORTED_MODULE_19__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/distributioncenters/:id/delete",
        component: _Delete__WEBPACK_IMPORTED_MODULE_20__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["Route"], {
        path: "/distributioncenters/:id/list-fleets",
        component: _fleets_index__WEBPACK_IMPORTED_MODULE_24__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_22__["default"], {
        classes: classes,
        items: items,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }));
    }
  }]);

  return DistributionCenter;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

DistributionCenter.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  fetchDistributionCenters: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_DistributionCentersReducer__WEBPACK_IMPORTED_MODULE_17__["getDistributionCenterListData"])(state));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_15__["bindActionCreators"])({
    fetchDistributionCenters: _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_16__["fetchDistributionCenters"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_9___default()(_resources_theme_distributionCenters__WEBPACK_IMPORTED_MODULE_18__["default"])(DistributionCenter)));

/***/ })

};
//# sourceMappingURL=main.a468cf22ec8e810f7124.hot-update.js.map