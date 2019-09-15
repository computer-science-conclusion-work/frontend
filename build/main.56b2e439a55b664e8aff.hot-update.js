exports.id = "main";
exports.modules = {

/***/ "./src/common/templates/DialogConfirm.jsx":
/*!************************************************!*\
  !*** ./src/common/templates/DialogConfirm.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyIconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyIconButton */ "./src/common/components/MyIconButton.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _jsxFileName = "/home/geovane/Documentos/Ada/frontend/src/common/templates/DialogConfirm.jsx";
// IMPORTS
// Material-ui
 // External

 // Internal



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Dialog, {
    open: props.open,
    onClose: props.handleClose,
    TransitionComponent: props.transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppBar, {
    className: props.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
    variant: "h6",
    color: "inherit",
    className: props.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyIconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handle: props.handleClose,
    label: "Close",
    icons: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    container: true,
    spacing: 6,
    Style: "padding: 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    handle: props.handleSubmit,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DeleteIcon, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      }
    }),
    name: "Confirmar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    handle: props.handleOnClose,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BackIcon, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }),
    name: "Cancelar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  })))), props.chldren);
});

/***/ })

};
//# sourceMappingURL=main.56b2e439a55b664e8aff.hot-update.js.map