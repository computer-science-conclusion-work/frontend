import { EDIT_STUDENT, FETCH_STUDENT } from './StudentsActions'

const INITIAL_STATE = {
  items: [],
  roles: [],
  editingStudent: null,
  filters: {
    registration: '',
    name: '',
  },
  page: 1,
  totalSize: 0,
  sizePerPage: 10,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENT.SUCCESS:
      return {
        ...state,
        items: action.payload.data.data.items,
        filters: action.payload.filters,
      }
    case EDIT_STUDENT.SUCCESS:
      return {
        ...state,
        editingStudent: action.payload.items,
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
    items: state.student.items,
    filters: state.student.filters,
  }
}

export const getEditingStudent = state => {
  return {
    student: state.student.editingStudent,
    filters: state.student.filters,
  }
}
