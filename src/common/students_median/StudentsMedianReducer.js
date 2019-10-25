import { FETCH_STUDENT_MEDIAN } from './StudentsMedianActions'

const INITIAL_STATE = {
  items: [],
  filters: {
    registration: '',
    name: '',
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENT_MEDIAN.SUCCESS:
      return {
        ...state,
        items: action.payload.data.data.items,
        filters: action.payload.filters,
      }
    case 'STUDENT_MEDIAN_INITIALIZE':
      return {
        ...state,
      }
    default:
      return state
  }
}

export const getStudentMedianListData = state => {
  return {
    items: state.student_median.items,
    filters: state.student_median.filters,
  }
}
