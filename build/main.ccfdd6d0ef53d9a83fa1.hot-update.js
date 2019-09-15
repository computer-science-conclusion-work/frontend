exports.id = "main";
exports.modules = {

/***/ "./src/common/distributionCenters/DistributionCentersReducer.js":
/*!**********************************************************************!*\
  !*** ./src/common/distributionCenters/DistributionCentersReducer.js ***!
  \**********************************************************************/
/*! exports provided: default, getSupplierListData, getStoreListData, getDistributionCenterListData, getEditingDistributionCenters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupplierListData", function() { return getSupplierListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreListData", function() { return getStoreListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistributionCenterListData", function() { return getDistributionCenterListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingDistributionCenters", function() { return getEditingDistributionCenters; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistributionCentersActions */ "./src/common/distributionCenters/DistributionCentersActions.js");


var INITIAL_STATE = {
  items: [],
  items_supplier: [],
  items_store: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingDistributionCenters: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_DISTRIBUTION_CENTER"].SUCCESS:
      console.log(action.payload.data.items);
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.payload.data.items // roles: action.payload.data.filterRoles,
        // totalSize: action.payload.data.totalSize,
        // page: action.payload.data.page,
        // sizePerPage: action.payload.data.sizePerPage,
        // filters: action.payload.data.filters,

      });

    case _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_DISTRIBUTION_CENTER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        editingSupplier: action.payload
      });

    case _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_DISTRIBUTION_CENTER_TO_SUPPLIER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items_supplier: action.payload
      });

    case _DistributionCentersActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_DISTRIBUTION_CENTER_TO_STORE"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items_store: action.payload
      });

    default:
      return state;
  }
});
var getSupplierListData = function getSupplierListData(state) {
  return {
    items: state.supplier.items,
    roles: state.supplier.roles,
    totalSize: state.supplier.totalSize,
    page: state.supplier.page,
    sizePerPage: state.supplier.sizePerPage
  };
};
var getStoreListData = function getStoreListData(state) {
  return {
    items: state.store.items,
    roles: state.store.roles,
    totalSize: state.store.totalSize,
    page: state.store.page,
    sizePerPage: state.store.sizePerPage
  };
};
var getDistributionCenterListData = function getDistributionCenterListData(state) {
  return {
    items: state.store.items,
    roles: state.store.roles,
    totalSize: state.store.totalSize,
    page: state.store.page,
    sizePerPage: state.store.sizePerPage
  };
};
var getEditingDistributionCenters = function getEditingDistributionCenters(state) {
  return state.supplier.editingDistributionCenters;
};

/***/ })

};
//# sourceMappingURL=main.ccfdd6d0ef53d9a83fa1.hot-update.js.map