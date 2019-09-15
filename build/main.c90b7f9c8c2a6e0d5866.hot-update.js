exports.id = "main";
exports.modules = {

/***/ "./src/common/suppliers/SuppliersReducer.js":
/*!**************************************************!*\
  !*** ./src/common/suppliers/SuppliersReducer.js ***!
  \**************************************************/
/*! exports provided: default, getSupplierListData, getEditingSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupplierListData", function() { return getSupplierListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingSupplier", function() { return getEditingSupplier; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuppliersActions */ "./src/common/suppliers/SuppliersActions.js");


var INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingSupplier: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_SUPPLIER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.payload.data.data.items,
        // roles: action.payload.data.filterRoles,
        // totalSize: action.payload.data.totalSize,
        // page: action.payload.data.page,
        // sizePerPage: action.payload.data.sizePerPage,
        filters: action.payload.filters
      });

    case _SuppliersActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_SUPPLIER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        editingSupplier: action.payload
      });

    case 'SUPPLIER_INITIALIZE':
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        roles: action.payload.data.roles,
        stores: action.payload.data.stores,
        branches: action.payload.data.branches,
        role: action.payload.data.role
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
var getEditingSupplier = function getEditingSupplier(state) {
  return state.supplier.editingSupplier;
};

/***/ })

};
//# sourceMappingURL=main.c90b7f9c8c2a6e0d5866.hot-update.js.map