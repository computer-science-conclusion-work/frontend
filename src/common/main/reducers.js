// IMPORTS
// External
import { combineReducers } from 'redux'

// Internal
import auth from '../auth/AuthReducer'
import main from './MainReducer'
import user from '../users/UserReducer'
import student from '../students/StudentsReducer'
import discipline from '../disciplines/DisciplinesReducer'
import student_median from '../students_median/StudentsMedianReducer'
import student_walking from '../students_walking/StudentsWalkingReducer'

const rootReducer = combineReducers({
  main,
  auth,
  user,
  student,
  discipline,

  student_median,
  student_walking,
})

export default rootReducer
