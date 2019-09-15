import { EDIT_USER, FETCH_USER } from './UserActions'

const INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingUser: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER.SUCCESS:
      return {
        ...state,
        items: action.payload.data.items,
        roles: action.payload.data.filterRoles,
        totalSize: action.payload.data.totalSize,
        page: action.payload.data.page,
        sizePerPage: action.payload.data.sizePerPage,
        filters: action.payload.data.filters,
      }
    case EDIT_USER.SUCCESS:
      return {
        ...state,
        editingUser: action.payload,
      }
    case 'USER_INITIALIZE':
      return {
        ...state,
        roles: action.payload.data.roles,
        stores: action.payload.data.stores,
        branches: action.payload.data.branches,
        role: action.payload.data.role,
      }
    default:
      return state
  }
}

export const getUserListData = state => {
  return {
    items: state.user.items,
    roles: state.user.roles,
    totalSize: state.user.totalSize,
    page: state.user.page,
    sizePerPage: state.user.sizePerPage,
  }
}

export const getEditingUser = state => {
  return state.user.editingUser
}
