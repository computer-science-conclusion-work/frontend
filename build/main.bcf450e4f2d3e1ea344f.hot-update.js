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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyIconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyIconButton */ "./src/common/components/MyIconButton.jsx");
/* harmony import */ var _components_MyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyButton */ "./src/common/components/MyButton.jsx");
var _jsxFileName = "/home/geovane/Documentos/Ada/frontend/src/common/templates/DialogConfirm.jsx";
// IMPORTS
// Material-ui






 // External

 // Internal



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    open: props.open,
    onClose: props.handleClose,
    TransitionComponent: props.transition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: props.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h6",
    color: "inherit",
    className: props.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, props.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyIconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handle: props.handleClose,
    label: "Close",
    icons: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CloseIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 6,
    Style: "padding: 20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handle: props.handleSubmit,
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }),
    name: "Confirmar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handle: props.handleOnClose,
    icon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.btnIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }),
    name: "Cancelar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })))), props.chldren);
});

/***/ })

};
//# sourceMappingURL=main.bcf450e4f2d3e1ea344f.hot-update.js.map