exports.id = "main";
exports.modules = {

/***/ "./src/common/fleet/FleetReducer.js":
/*!******************************************!*\
  !*** ./src/common/fleet/FleetReducer.js ***!
  \******************************************/
/*! exports provided: default, getFleetListData, getEditingFleet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFleetListData", function() { return getFleetListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingFleet", function() { return getEditingFleet; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FleetActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FleetActions */ "./src/common/fleet/FleetActions.js");


var INITIAL_STATE = {
  items: [],
  items_distributionCenter: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingFleet: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _FleetActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_FLEET"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items: action.payload.data.data.items,
        filters: action.payload.filters
      });

    case _FleetActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_FLEET"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        editingFleet: action.payload
      });

    case _FleetActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_FLEET_TO_DISTRIBUTION_CENTER"].SUCCESS:
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        items_distributionCenter: action.payload
      });

    case 'FLEET_INITIALIZE':
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
var getFleetListData = function getFleetListData(state) {
  return {
    items: state.fleet.items
  };
};
var getEditingFleet = function getEditingFleet(state) {
  return state.fleet.editingFleet;
};

/***/ })

};
//# sourceMappingURL=main.028212ced9a4600d8c36.hot-update.js.map