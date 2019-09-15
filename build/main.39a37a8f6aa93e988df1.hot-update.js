exports.id = "main";
exports.modules = {

/***/ "./src/common/suppliers/SuppliersActions.js":
/*!**************************************************!*\
  !*** ./src/common/suppliers/SuppliersActions.js ***!
  \**************************************************/
/*! exports provided: REMOVE_SUPPLIER, SUBMIT_SUPPLIER, FETCH_SUPPLIER, EDIT_SUPPLIER, fetchSuppliers, edit, post, update, destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SUPPLIER", function() { return REMOVE_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_SUPPLIER", function() { return SUBMIT_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SUPPLIER", function() { return FETCH_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUPPLIER", function() { return EDIT_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSuppliers", function() { return fetchSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");





var REMOVE_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('REMOVE_SUPPLIER');
var SUBMIT_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SUBMIT_SUPPLIER');
var FETCH_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_SUPPLIER');
var EDIT_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('EDIT_SUPPLIER');
function fetchSuppliers(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_SUPPLIER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier?filters=") + JSON.stringify(filters) + "&&page=" + page + "&&rows=" + (rows || _consts__WEBPACK_IMPORTED_MODULE_4__["default"].DEFAULT_PAGINATION), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_SUPPLIER.SUCCESS, {
        data: resp.data,
        filters: filters
      }));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_SUPPLIER, e));
    });
  };
}
function edit(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_SUPPLIER.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier/").concat(id)).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_SUPPLIER.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(EDIT_SUPPLIER, e));
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
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_SUPPLIER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a[method]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier").concat(id), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_SUPPLIER.SUCCESS, data));
      dispatch(fetchSuppliers());
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SUBMIT_SUPPLIER, e));
    });
  };
}

function destroy(id) {
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
//# sourceMappingURL=main.39a37a8f6aa93e988df1.hot-update.js.map