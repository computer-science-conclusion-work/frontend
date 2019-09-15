exports.id = "main";
exports.modules = {

/***/ "./src/common/auth/AuthReducer.js":
/*!****************************************!*\
  !*** ./src/common/auth/AuthReducer.js ***!
  \****************************************/
/*! exports provided: userKey, tokenKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userKey", function() { return userKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenKey", function() { return tokenKey; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _AuthActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthActions */ "./src/common/auth/AuthActions.js");



var userKey = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].storagePrefix, "_user");
var tokenKey = "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].storagePrefix, "_token");
var INITIAL_STATE = {
  forgotPassword: false,
  loading: false,
  modal: false,
  user: null,
  token: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action);

  switch (action.type) {
    case _AuthActions__WEBPACK_IMPORTED_MODULE_2__["AUTHENTICATE"].SUCCESS:
      localStorage.setItem(tokenKey, JSON.stringify(action.payload));
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        token: action.payload
      });

    case _AuthActions__WEBPACK_IMPORTED_MODULE_2__["AUTHENTICATED_USER"].SUCCESS:
      localStorage.setItem(userKey, JSON.stringify(action.payload.data.item));
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        user: action.payload.data.item
      });

    case _AuthActions__WEBPACK_IMPORTED_MODULE_2__["CHECK_AUTH"]:
      if (typeof localStorage !== 'undefined') {
        var newState = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state);

        var user = localStorage.getItem(userKey);

        if (user) {
          newState.user = JSON.parse(user);
        }

        var token = localStorage.getItem(tokenKey);

        if (token) {
          newState.token = JSON.parse(token);
        }

        return newState;
      }

      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state);

    case _AuthActions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]:
      localStorage.removeItem(userKey);
      localStorage.removeItem(tokenKey);
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        user: null,
        token: null
      });

    default:
      return state;
  }
});

/***/ })

};
//# sourceMappingURL=main.fa8abca9bd9e5dcdfc05.hot-update.js.map