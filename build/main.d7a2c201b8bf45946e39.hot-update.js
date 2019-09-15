exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/pages/Form.js":
/*!*****************************************!*\
  !*** ./src/common/stores/pages/Form.js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _resources_theme_users__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../resources/theme/users */ "./src/resources/theme/users.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");








var _jsxFileName = "/srv/app/src/common/stores/pages/Form.js";
// IMPORTS
// Material UI







 // Externals imports (Dependencies)



 // Internal imports




var UserForm =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(UserForm, _EnhancedComponent);

  function UserForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(UserForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      dirty: false,
      fields: {
        name: '',
        email: '',
        role_id: ''
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleClose", function () {
      return _this.props.onClose && _this.props.onClose();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onSubmit", function (e) {
      e.preventDefault();
      _this.props.onSubmit && _this.props.onSubmit(_this.state.fields);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.state.dirty && nextProps.data) {
        this.setState({
          fields: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, nextProps.data)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          roles = _this$props.roles;
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onChange: this.onChange('name'),
        label: "Nome",
        required: true,
        fullWidth: true,
        value: this.state.fields.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default.a, {
        onChange: this.onChange('email'),
        label: "E-mail",
        required: true,
        value: this.state.fields.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.formControl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Tipo de Usu\xE1rio"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        onChange: this.onChange('role_id'),
        value: this.state.fields.role_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Selecione..."), roles.map(function (role) {
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
          key: role.id,
          value: role.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, role.value);
      })))))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["DialogActions"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        color: "primary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Salvar"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Cancelar")));
    }
  }]);

  return UserForm;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_20__["default"]);

UserForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.object.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.user.roles || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_15___default()(_resources_theme_users__WEBPACK_IMPORTED_MODULE_19__["default"])(UserForm)));

/***/ }),

/***/ "./src/common/stores/pages/New.js":
/*!****************************************!*\
  !*** ./src/common/stores/pages/New.js ***!
  \****************************************/
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../resources/theme/stores'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StoreActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../StoreActions */ "./src/common/stores/StoreActions.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Form */ "./src/common/stores/pages/Form.js");








var _jsxFileName = "/srv/app/src/common/stores/pages/New.js";
// IMPORTS
// Material UI







 // Externals imports (Dependencies)




 // Internal imports






function Transition(props) {
  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_11___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    direction: "down"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
}

var NewStore =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(NewStore, _EnhancedComponent);

  function NewStore() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NewStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NewStore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      fields: {
        description: '',
        min_freight: ''
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onSubmit", function (values) {
      // valida os campos se necessário
      _this.props.post(values).then(function (data) {
        if (data && data.code === 200) {
          _this.props.history.push('/stores');
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onClose", function () {
      _this.props.history.push('/stores');
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NewStore, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default.a, {
        open: true,
        onClose: this.onClose,
        TransitionComponent: Transition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "h6",
        color: "inherit",
        className: classes.flex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Novo Lojista"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
        color: "inherit",
        onClick: this.onClose,
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })))), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onClose: this.onClose,
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }));
    }
  }]);

  return NewStore;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_20__["default"]);

NewStore.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.store.roles || []
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_18__["bindActionCreators"])({
    post: _StoreActions__WEBPACK_IMPORTED_MODULE_22__["post"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(mapStateToProps, mapDispatchToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_14___default()(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../resources/theme/stores'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(NewStore)));

/***/ })

};
//# sourceMappingURL=main.d7a2c201b8bf45946e39.hot-update.js.map