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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "@material-ui/core/styles/withStyles");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _resources_theme_stores__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../resources/theme/stores */ "./src/resources/theme/stores.js");
/* harmony import */ var _components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/EnhancedComponent */ "./src/common/components/EnhancedComponent.js");








var _jsxFileName = "/srv/app/src/common/stores/pages/Form.js";
// IMPORTS
// Material UI





 // Externals imports (Dependencies)



 // Internal imports




var StoreForm =
/*#__PURE__*/
function (_EnhancedComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(StoreForm, _EnhancedComponent);

  function StoreForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, StoreForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(StoreForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      dirty: false,
      fields: {
        description: '',
        CNPJ: '',
        min_freight: '',
        CEP: '',
        street: '',
        number: '',
        complement: '',
        bairro: '',
        city: '',
        state: '',
        phone: ''
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(StoreForm, [{
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
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('description'),
        label: "Descri\xE7\xE3o",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_15___default.a, {
        mask: "99.999.999/9999-99",
        value: this.state.fields.CNPJ,
        onChange: this.onChange('CNPJ'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
          fullWidth: true,
          margin: "dense",
          variant: "outlined",
          label: "CNPJ",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('min_freight'),
        label: "Frete M\xEDnimo",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.min_freight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_15___default.a, {
        mask: "99.999-999",
        onBlur: this.findCep,
        value: this.state.fields.CEP,
        onChange: this.onChange('CEP'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
          fullWidth: true,
          margin: "dense",
          variant: "outlined",
          label: "CEP",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        });
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('street'),
        label: "Logradouro",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.street,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('number'),
        label: "N\xFAmero",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.number,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('complement'),
        label: "Complemento",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        value: this.state.fields.complement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('bairro'),
        label: "Bairro",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.bairro,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('city'),
        label: "Cidade",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.city,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('state'),
        label: "Estado",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange('phone'),
        label: "Telefone",
        margin: "dense",
        variant: "outlined",
        fullWidth: true,
        required: true,
        value: this.state.fields.phone,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["DialogActions"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        color: "primary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, "Salvar"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "Cancelar")));
    }
  }]);

  return StoreForm;
}(_components_EnhancedComponent__WEBPACK_IMPORTED_MODULE_18__["default"]);

StoreForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    roles: state.store.roles || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_12___default()(_resources_theme_stores__WEBPACK_IMPORTED_MODULE_17__["default"])(StoreForm)));

/***/ })

};
//# sourceMappingURL=main.ce5828dbb4b5fada67e0.hot-update.js.map