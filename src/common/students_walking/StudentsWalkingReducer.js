import { FETCH_STUDENT_WALKING } from './StudentsWalkingActions'

const INITIAL_STATE = {
  items: [],
  students: [],
  filters: {
    registration: '',
    name: '',
  },
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STUDENT_WALKING.SUCCESS:
      return {
        ...state,
        items: action.payload.data.data.items,
        students: action.payload.data.data.students,
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

export const getStudentWalkingListData = state => {
  return {
    items: state.student_walking.items,
    students: state.student_walking.students,
    filters: state.student_walking.filters,
  }
}
