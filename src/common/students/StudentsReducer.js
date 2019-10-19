import { EDIT_STUDENT, FETCH_STUDENT, REMOVE_STUDENT } from './StudentsActions'

const INITIAL_STATE = {
  items: [],
  roles: [],
  editingStudent: null,
  filters: [],
  page: 1,
  totalSize: 0,
  sizePerPage: 10,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENT.SUCCESS:
      return {
        ...state,
        items: action.payload.data.items.data,
        filters: action.payload.data.filters,
      }
    case EDIT_STUDENT.SUCCESS:
      return {
        ...state,
        editingStudent: action.payload.items,
      }
    case REMOVE_STUDENT.SUCCESS:
      return {
        ...state,
        items: action.payload.data.items,
        filters: action.payload.data.filters,
      }
    case 'STUDENT_INITIALIZE':
      return {
        ...state,
      }
    default:
      return state
  }
}

export const getStudentListData = state => {
  return {
    items: state.student.items
  }
}

export const getEditingStudent = state => {
  return state.student.editingStudent
}
