exports.id = "main";
exports.modules = {

/***/ "./src/common/stores/StoreReducer.js":
/*!*******************************************!*\
  !*** ./src/common/stores/StoreReducer.js ***!
  \*******************************************/
/*! exports provided: default, getStoreListData, getEditingStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreListData", function() { return getStoreListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingStore", function() { return getEditingStore; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StoreActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreActions */ "./src/common/stores/StoreActions.js");


var INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingStore: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _StoreActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_STORE"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.payload.data.items,
        // roles: action.payload.data.filterRoles,
        // totalSize: action.payload.data.totalSize,
        // page: action.payload.data.page,
        // sizePerPage: action.payload.data.sizePerPage,
        filters: action.payload.data.filters
      });

    case _StoreActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_STORE"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        editingStore: action.payload
      });

    case 'STORE_INITIALIZE':
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
var getStoreListData = function getStoreListData(state) {
  return {
    items: state.store.items,
    roles: state.store.roles,
    totalSize: state.store.totalSize,
    page: state.store.page,
    sizePerPage: state.store.sizePerPage
  };
};
var getEditingStore = function getEditingStore(state) {
  return state.store.editingStore;
};

/***/ })

};
//# sourceMappingURL=main.67bb5d5a79e39a92d6a9.hot-update.js.map