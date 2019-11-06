// IMPORTS
// Externals imports (Dependencies)
import axios from 'axios'

// Internal imports
import config from '../../config'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const FETCH_STUDENT_WALKING = createAsyncConst('FETCH_STUDENT_WALKING')

export function fetchStudentsWalking(filters = []) {
  return dispatch => {
    dispatch(action(FETCH_STUDENT_WALKING.ACTION))
    return axios
      .get(
        `${config.API_URL}/students_walking?filters=${JSON.stringify(filters)}`
      )
      .then(resp => {
        dispatch(action(FETCH_STUDENT_WALKING.SUCCESS, {data: resp.data, filters: filters}))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_STUDENT_WALKING, e)))
  }
}