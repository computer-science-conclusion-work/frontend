exports.id = "main";
exports.modules = {

/***/ "./src/common/fleet/FleetActions.js":
/*!******************************************!*\
  !*** ./src/common/fleet/FleetActions.js ***!
  \******************************************/
/*! exports provided: REMOVE_FLEET, SUBMIT_FLEET, FETCH_FLEET, EDIT_FLEET, SAVE_FLEET_TO_DISTRIBUTION_CENTER, FETCH_FLEET_TO_DISTRIBUTION_CENTER, fetchFleet, edit, post, update, remove, fetchFleetsPerDistributionCenters, saveFleetsPerDistributionCenters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FLEET", function() { return REMOVE_FLEET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_FLEET", function() { return SUBMIT_FLEET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FLEET", function() { return FETCH_FLEET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FLEET", function() { return EDIT_FLEET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_FLEET_TO_DISTRIBUTION_CENTER", function() { return SAVE_FLEET_TO_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_FLEET_TO_DISTRIBUTION_CENTER", function() { return FETCH_FLEET_TO_DISTRIBUTION_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFleet", function() { return fetchFleet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edit", function() { return edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFleetsPerDistributionCenters", function() { return fetchFleetsPerDistributionCenters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFleetsPerDistributionCenters", function() { return saveFleetsPerDistributionCenters; });
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _util_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/action */ "./src/util/action.js");
/* harmony import */ var _util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/createAsyncConst */ "./src/util/createAsyncConst.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ "./src/consts.js");





var REMOVE_FLEET = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('REMOVE_FLEET');
var SUBMIT_FLEET = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SUBMIT_FLEET');
var FETCH_FLEET = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_FLEET');
var EDIT_FLEET = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('EDIT_FLEET');
var SAVE_FLEET_TO_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('SAVE_FLEET_TO_DISTRIBUTION_CENTER');
var FETCH_FLEET_TO_DISTRIBUTION_CENTER = Object(_util_createAsyncConst__WEBPACK_IMPORTED_MODULE_3__["default"])('FETCH_FLEET_TO_DISTRIBUTION_CENTER');
function fetchFleet(page) {
  var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_FLEET.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/fleet?filters=") + JSON.stringify(filters) + "&&page=" + page + "&&rows=" + (rows || _consts__WEBPACK_IMPORTED_MODULE_4__["default"].DEFAULT_PAGINATION), {
      page: page,
      filters: filters
    }).then(function (resp) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_FLEET.SUCCESS, {
        data: resp.data,
        filters: filters
      }));
      return resp;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_FLEET, e));
    });
  };
}
function edit(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_FLEET.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/fleet/").concat(id)).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(EDIT_FLEET.SUCCESS, data));
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(EDIT_FLEET, e));
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
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_FLEET.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a[method]("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/fleet").concat(id), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SUBMIT_FLEET.SUCCESS, data));
      dispatch(fetchFleet());
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SUBMIT_FLEET, e));
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
} // Associação entre Centro de Distribuição e Lojistas

function fetchFleetsPerDistributionCenters(id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_FLEET_TO_DISTRIBUTION_CENTER.ACTION, {
      id: id
    }));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store/").concat(id, "/distributioncenters")).then(function (resp) {
      return resp.data.data.item;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(FETCH_FLEET_TO_DISTRIBUTION_CENTER.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(FETCH_FLEET_TO_DISTRIBUTION_CENTER, e));
    });
  };
}
function saveFleetsPerDistributionCenters(values, id) {
  return function (dispatch) {
    dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_FLEET_TO_DISTRIBUTION_CENTER.ACTION));
    return axios_index__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL, "/store/").concat(id, "/distributioncenters/save"), values).then(function (resp) {
      return resp.data;
    }).then(function (data) {
      dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["default"])(SAVE_FLEET_TO_DISTRIBUTION_CENTER.SUCCESS, data));
      return data;
    })["catch"](function (e) {
      return dispatch(Object(_util_action__WEBPACK_IMPORTED_MODULE_2__["actionFailed"])(SAVE_FLEET_TO_DISTRIBUTION_CENTER, e));
    });
  };
}

/***/ })

};
//# sourceMappingURL=main.0507cb2f10eaf09b00c5.hot-update.js.map