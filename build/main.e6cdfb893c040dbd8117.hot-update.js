exports.id = "main";
exports.modules = {

/***/ "./src/common/auth/AuthActions.js":
/*!****************************************!*\
  !*** ./src/common/auth/AuthActions.js ***!
  \****************************************/
/*! exports provided: AUTHENTICATE, AUTHENTICATED_USER, LOGOUT, CHECK_AUTH, login, fetchAuthenticatedUser, submit, logout, checkAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE", function() { return AUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH", function() { return CHECK_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthenticatedUser", function() { return fetchAuthenticatedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
// IMPORTS
// External
 // Internal




var AUTHENTICATE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('AUTHENTICATE');
var AUTHENTICATED_USER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('AUTHENTICATED_USER');
var LOGOUT = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('LOGOUT');
var CHECK_AUTH = 'CHECK_AUTH';
function login(values) {
  values.grant_type = _config__WEBPACK_IMPORTED_MODULE_1__["default"].API_GRANT;
  values.client_id = _config__WEBPACK_IMPORTED_MODULE_1__["default"].API_CLIENT;
  values.client_secret = _config__WEBPACK_IMPORTED_MODULE_1__["default"].API_SECRET;
  return submit(values, "".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/auth/login"));
}
function fetchAuthenticatedUser() {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATED_USER.ACTION));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/user/init")).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATED_USER.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATED_USER.FAILURE, null, e.response.data));
    });
  };
}
function submit(values, url) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATE.ACTION));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      console.log(data);
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATE.SUCCESS, data));
      fetchAuthenticatedUser()(dispatch);
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(AUTHENTICATE.FAILURE, null, e.response.data));
    });
  };
}
function logout() {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(LOGOUT.ACTION));
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/logout")).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(LOGOUT.SUCCESS, data.data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(LOGOUT.FAILURE, null, e.response.data));
    });
  };
}
function checkAuth() {
  return Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(CHECK_AUTH);
}

/***/ })

};
//# sourceMappingURL=main.e6cdfb893c040dbd8117.hot-update.js.map