exports.id = "main";
exports.modules = {

/***/ "./src/common/students/StudentsReducer.js":
/*!************************************************!*\
  !*** ./src/common/students/StudentsReducer.js ***!
  \************************************************/
/*! exports provided: default, getStoreListData, getEditingStudent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreListData", function() { return getStoreListData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditingStudent", function() { return getEditingStudent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StudentsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentsActions */ "./src/common/students/StudentsActions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingStudent: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _StudentsActions__WEBPACK_IMPORTED_MODULE_1__["FETCH_STUDENT"].SUCCESS:
      return _objectSpread({}, state, {
        items: action.payload.data.items,
        filters: action.payload.data.filters
      });

    case _StudentsActions__WEBPACK_IMPORTED_MODULE_1__["EDIT_STUDENT"].SUCCESS:
      return _objectSpread({}, state, {
        editingStudent: action.payload
      });

    case _StudentsActions__WEBPACK_IMPORTED_MODULE_1__["REMOVE_STUDENT"].SUCCESS:
      return _objectSpread({}, state, {
        items: action.payload.data.items,
        filters: action.payload.data.filters
      });

    case 'STUDENT_INITIALIZE':
      return _objectSpread({}, state, {
        roles: action.payload.data.roles,
        students: action.payload.data.students,
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
var getEditingStudent = function getEditingStudent(state) {
  return state.student.editingStudent;
};

/***/ })

};
//# sourceMappingURL=main.dd914a7a292f98909a41.hot-update.js.map