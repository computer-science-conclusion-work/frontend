exports.id = "main";
exports.modules = {

/***/ "./src/common/templates/DialogForm.jsx":
/*!*********************************************!*\
  !*** ./src/common/templates/DialogForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyIconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyIconButton */ "./src/common/components/MyIconButton.jsx");
var _jsxFileName = "/home/geovane/Documentos/Ada/frontend/src/common/templates/DialogForm.jsx";
// IMPORTS
// Material-ui

 // External

 // Internal


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Dialog, {
    fullScreen: true,
    open: props.open,
    onClose: props.handleClose,
    TransitionComponent: props.transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AppBar, {
    className: props.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h6",
    color: "inherit",
    className: props.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyIconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handle: props.handleClose,
    label: "Close",
    icons: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CloseIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }))), props.chldren);
});

/***/ })

};
//# sourceMappingURL=main.b1e733387b09f4ab653d.hot-update.js.map