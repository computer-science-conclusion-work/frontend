// IMPORTS
// External
import { combineReducers } from 'redux'

// Internal
import auth from '../auth/AuthReducer'
import main from './MainReducer'
import user from '../users/UserReducer'
import student from '../students/StudentsReducer'

const rootReducer = combineReducers({
  main,
  auth,
  user,
  student,
})

export default rootReducer
