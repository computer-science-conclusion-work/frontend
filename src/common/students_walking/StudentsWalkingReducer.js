import { FETCH_STUDENT_WALKING } from './StudentsWalkingActions'

const INITIAL_STATE = {
  items: [],
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
    filters: state.student_walking.filters,
  }
}
