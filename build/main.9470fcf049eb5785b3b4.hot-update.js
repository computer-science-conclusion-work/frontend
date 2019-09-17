exports.id = "main";
exports.modules = {

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_main_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/main/App */ "./src/common/main/App.jsx");
/* harmony import */ var _common_main_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/main/configureStore */ "./src/common/main/configureStore.js");
/* harmony import */ var _common_main_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/main/reducers */ "./src/common/main/reducers.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
var _jsxFileName = "/home/geovane/Documentos/Ada/frontend/src/server/index.js";












var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json"); //var cors = require('cors');


var server = express__WEBPACK_IMPORTED_MODULE_0___default()();
server.disable('x-powered-by') //.use(cors())
.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"]("/home/geovane/Documentos/Ada/frontend/public")).get('/*', function (req, res) {
  // Compile an initial state
  var preloadedState = Object(_common_main_reducers__WEBPACK_IMPORTED_MODULE_9__["default"])({}, {
    type: 'INITIALIZE'
  }); // Create a new Redux store instance

  var store = Object(_common_main_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(preloadedState); // Render the component to a string

  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
    location: req.url,
    context: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_main_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })))); // Grab the initial state from our Redux store

  var finalState = store.getState();
  res.send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charSet='utf-8' />\n        <title>".concat(_config__WEBPACK_IMPORTED_MODULE_10__["default"].title, "</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n          ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </head>\n    <body>\n        <div id=\"root\">").concat(markup, "</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(finalState), "\n        </script>\n    </body>\n</html>"));
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.9470fcf049eb5785b3b4.hot-update.js.map