exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/StoreActions.js":
/*!*******************************************!*\
  !*** ./src/common/stores/StoreActions.js ***!
  \*******************************************/
/*! exports provided: REMOVE_STORE, SUBMIT_STORE, FETCH_STORE, EDIT_STORE, fetchUsers, edit, post, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_STORE", function() { return REMOVE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_STORE", function() { return SUBMIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STORE", function() { return FETCH_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORE", function() { return EDIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
// IMPORTS
// Externals imports (Dependencies)
 // Internal imports




var REMOVE_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('REMOVE_STORE');
var SUBMIT_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SUBMIT_STORE');
var FETCH_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_STORE');
var EDIT_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('EDIT_STORE');
function fetchUsers(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_STORE.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store?filters=") + JSON.stringify(filters), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_STORE.SUCCESS, resp.data));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_STORE, e));
    });
  };
}
function edit(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_USER.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/users/").concat(id)).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_USER.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(EDIT_USER, e));
    });
  };
}
function post(values) {
  return submit(values, 'post');
}
function update(values) {
  return submit(values, 'put');
}

function submit(values, method) {
  var id = values.id ? "/".concat(values.id) : '';
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_USER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a[method]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/users").concat(id), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_USER.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SUBMIT_USER, e));
    });
  };
}

function remove(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(REMOVE_USER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/api/user/").concat(id)).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(REMOVE_USER.SUCCESS, data));
      dispatch(fetchUsers());
    })["catch"](function (e) {
      return Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(REMOVE_USER.FAILURE, e);
    });
  };
}

/***/ })

};
//# sourceMappingURL=main.2c5bf954784890b26bbf.hot-update.js.map