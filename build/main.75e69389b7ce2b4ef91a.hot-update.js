exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/StoreActions.js":
/*!*******************************************!*\
  !*** ./src/common/stores/StoreActions.js ***!
  \*******************************************/
/*! exports provided: REMOVE_STORE, SUBMIT_STORE, FETCH_STORE, EDIT_STORE, fetchStores, edit, post, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_STORE", function() { return REMOVE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_STORE", function() { return SUBMIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STORE", function() { return FETCH_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STORE", function() { return EDIT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStores", function() { return fetchStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
// IMPORTS
// Externals imports (Dependencies)
 // Internal imports





var REMOVE_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_4__["default"])('REMOVE_STORE');
var SUBMIT_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_4__["default"])('SUBMIT_STORE');
var FETCH_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_4__["default"])('FETCH_STORE');
var EDIT_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_4__["default"])('EDIT_STORE');
function fetchStores(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(FETCH_STORE.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store?filters=") + JSON.stringify(filters) + "&&page=".concat(page, "&&rows=").concat(rows || _consts__WEBPACK_IMPORTED_MODULE_2__["default"].DEFAULT_PAGINATION), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(FETCH_STORE.SUCCESS, resp.data));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["actionFailed"])(FETCH_STORE, e));
    });
  };
}
function edit(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(EDIT_STORE.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store/").concat(id)).then(function (resp) {
      return resp.data.data.items;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(EDIT_STORE.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["actionFailed"])(EDIT_STORE, e));
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
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(SUBMIT_STORE.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a[method]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store").concat(id), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(SUBMIT_STORE.SUCCESS, data));
      dispatch(fetchStores());
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["actionFailed"])(SUBMIT_STORE, e));
    });
  };
}

function remove(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(REMOVE_STORE.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/api/store/").concat(id)).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["default"])(REMOVE_STORE.SUCCESS, data));
      dispatch(fetchStores());
    })["catch"](function (e) {
      return Object(_util_action__WEBPACK_IMPORTED_MODULE_3__["actionFailed"])(REMOVE_STORE.FAILURE, e);
    });
  };
}

/***/ })

};
//# sourceMappingURL=main.75e69389b7ce2b4ef91a.hot-update.js.map