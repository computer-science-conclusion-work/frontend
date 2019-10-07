import { EDIT_USER, FETCH_USER, FETCH_ROLES } from './UserActions'

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
        filters: action.payload.data.filters,
      }
    case EDIT_USER.SUCCESS:
      return {
        ...state,
        editingUser: action.payload.item,
        roles: action.payload.roles
      }
    case FETCH_ROLES.SUCCESS:
      return {
        ...state,
        roles: action.payload.data,items
      }
    case 'USER_INITIALIZE':
      return {
        ...state,
        roles: action.payload.data.roles
      }
    default:
      return state
  }
}

export const getUserListData = state => {
  return {
    items: state.user.items,
    roles: state.user.roles,
  }
}

export const getEditingUser = state => {
  return state.user.editingUser
}
