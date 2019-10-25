// IMPORTS
// Externals imports (Dependencies)
import axios from 'axios'

// Internal imports
import config from '../../config'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const FETCH_STUDENT_MEDIAN = createAsyncConst('FETCH_STUDENT_MEDIAN')

export function fetchStudentsMedian(filters = []) {
  return dispatch => {
    dispatch(action(FETCH_STUDENT_MEDIAN.ACTION))
    return axios
      .get(
        `${config.API_URL}/students_median?filters=${JSON.stringify(filters)}`
      )
      .then(resp => {
        dispatch(action(FETCH_STUDENT_MEDIAN.SUCCESS, {data: resp.data, filters: filters}))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_STUDENT_MEDIAN, e)))
  }
}