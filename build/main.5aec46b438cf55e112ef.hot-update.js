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
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyIconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyIconButton */ "./src/common/components/MyIconButton.jsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _jsxFileName = "/home/geovane/Documentos/Ada/frontend/src/common/templates/DialogConfirm.jsx";
// IMPORTS
// Material-ui


 // External

 // Internal



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Dialog, {
    open: props.open,
    onClose: props.handleClose,
    TransitionComponent: props.transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(AppBar, {
    className: props.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
    variant: "h6",
    color: "inherit",
    className: props.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, props.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyIconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handle: props.handleClose,
    label: "Close",
    icons: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Grid, {
    container: true,
    spacing: 6,
    Style: "padding: 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Grid, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    handle: props.handleSubmit,
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }),
    name: "Confirmar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Grid, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../components/MyButton'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    handle: props.handleOnClose,
    icon: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }),
    name: "Cancelar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })))), props.chldren);
});

/***/ })

};
//# sourceMappingURL=main.5aec46b438cf55e112ef.hot-update.js.map