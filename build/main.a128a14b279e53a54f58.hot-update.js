exports.id = "main";
exports.modules = {

/***/ "./src/common/distributionCenters/DistributionCentersActions.js":
/*!**********************************************************************!*\
  !*** ./src/common/distributionCenters/DistributionCentersActions.js ***!
  \**********************************************************************/
/*! exports provided: REMOVE_DISTRIBUTION_CENTER, SUBMIT_DISTRIBUTION_CENTER, FETCH_DISTRIBUTION_CENTER, SAVE_DISTRIBUTION_CENTER_SUPPLIER, FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER, EDIT_DISTRIBUTION_CENTER, SAVE_DISTRIBUTION_CENTER_STORE, FETCH_DISTRIBUTION_CENTER_TO_STORE, fetchDistributionCenters, edit, post, update, remove, fetchDistributionCentersPerSuppliers, saveDCSupplier, fetchDistributionCentersPerStores, saveDistributionCentersPerStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_DISTRIBUTION_CENTER", function() { return REMOVE_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_DISTRIBUTION_CENTER", function() { return SUBMIT_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DISTRIBUTION_CENTER", function() { return FETCH_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_DISTRIBUTION_CENTER_SUPPLIER", function() { return SAVE_DISTRIBUTION_CENTER_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER", function() { return FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_DISTRIBUTION_CENTER", function() { return EDIT_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_DISTRIBUTION_CENTER_STORE", function() { return SAVE_DISTRIBUTION_CENTER_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DISTRIBUTION_CENTER_TO_STORE", function() { return FETCH_DISTRIBUTION_CENTER_TO_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDistributionCenters", function() { return fetchDistributionCenters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDistributionCentersPerSuppliers", function() { return fetchDistributionCentersPerSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDCSupplier", function() { return saveDCSupplier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDistributionCentersPerStores", function() { return fetchDistributionCentersPerStores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDistributionCentersPerStores", function() { return saveDistributionCentersPerStores; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");




var REMOVE_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('REMOVE_DISTRIBUTION_CENTER');
var SUBMIT_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SUBMIT_DISTRIBUTION_CENTER');
var FETCH_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_DISTRIBUTION_CENTER');
var SAVE_DISTRIBUTION_CENTER_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SAVE_DISTRIBUTION_CENTER_SUPPLIER');
var FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER');
var EDIT_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('EDIT_DISTRIBUTION_CENTER');
var SAVE_DISTRIBUTION_CENTER_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SAVE_DISTRIBUTION_CENTER_STORE');
var FETCH_DISTRIBUTION_CENTER_TO_STORE = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_DISTRIBUTION_CENTER_TO_STORE');
function fetchDistributionCenters(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/distributioncenter?filters=") + JSON.stringify(filters), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER.SUCCESS, resp.data));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_DISTRIBUTION_CENTER, e));
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
function fetchDistributionCentersPerSuppliers(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/distributioncenterpersupplier/").concat(id)).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER.SUCCESS, data));
      return data;
    }) // .then(data => dispatch(action(FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER.SUCCESS, data)))
    ["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER, e));
    });
  };
} // Associação entre Centro de Distribuição e Fornecedores

function saveDCSupplier(values, id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_DISTRIBUTION_CENTER_SUPPLIER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/supplier/").concat(id, "/distributioncenters"), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_DISTRIBUTION_CENTER_SUPPLIER.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SAVE_DISTRIBUTION_CENTER_SUPPLIER, e));
    });
  };
} // Associação entre Centro de Distribuição e Lojistas

function fetchDistributionCentersPerStores(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER_TO_STORE.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store/").concat(id, "/distributioncenters")).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_DISTRIBUTION_CENTER_TO_STORE.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_DISTRIBUTION_CENTER_TO_STORE, e));
    });
  };
}
function saveDistributionCentersPerStores(values, id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_DISTRIBUTION_CENTER_STORE.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store/").concat(id, "/distributioncenters/save"), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_DISTRIBUTION_CENTER_STORE.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SAVE_DISTRIBUTION_CENTER_STORE, e));
    });
  };
}

/***/ })

};
//# sourceMappingURL=main.a128a14b279e53a54f58.hot-update.js.map