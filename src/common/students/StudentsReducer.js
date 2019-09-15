import { EDIT_STUDENT, FETCH_STUDENT, REMOVE_STUDENT } from './StudentsActions'

const INITIAL_STATE = {
  items: [],
  roles: [],
  totalSize: 0,
  page: 1,
  sizePerPage: 10,
  filters: [],
  editingStudent: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENT.SUCCESS:
      return {
        ...state,
        items: action.payload.data.items,
        filters: action.payload.data.filters,
      }
    case EDIT_STUDENT.SUCCESS:
      return {
        ...state,
        editingStudent: action.payload,
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
        roles: action.payload.data.roles,
        students: action.payload.data.students,
        branches: action.payload.data.branches,
        role: action.payload.data.role,
      }
    default:
      return state
  }
}

export const getStudentListData = state => {
  return {
    items: state.students.items,
    roles: state.students.roles,
    totalSize: state.students.totalSize,
    page: state.students.page,
    sizePerPage: state.students.sizePerPage,
  }
}

export const getEditingStudent = state => {
  return state.students.editingStudent
}
