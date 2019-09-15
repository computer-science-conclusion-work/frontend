// IMPORTS
// Externals imports (Dependencies)
import axios from 'axios'

// Internal imports
import config from '../../config'
import consts from '../../consts'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const REMOVE_STUDENT = createAsyncConst('REMOVE_STUDENT')
export const SUBMIT_STUDENT = createAsyncConst('SUBMIT_STUDENT')
export const FETCH_STUDENT = createAsyncConst('FETCH_STUDENT')
export const EDIT_STUDENT = createAsyncConst('EDIT_STUDENT')

export function fetchStudents(page, filters = [], rows) {
  return dispatch => {
    dispatch(action(FETCH_STUDENT.ACTION))
    return axios
      .get(
        `${config.API_URL}/students?filters=${JSON.stringify(
          filters
        )}&&page=${page}&&rows=${rows || consts.DEFAULT_PAGINATION}`,
        {
          page,
          filters,
        }
      )
      .then(resp => {
        dispatch(action(FETCH_STUDENT.SUCCESS, resp.data))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_STUDENT, e)))
  }
}

export function edit(id) {
  return dispatch => {
    dispatch(action(EDIT_STUDENT.ACTION, { id }))
    return axios
      .get(`${config.API_URL}/students/${id}`)
      .then(resp => resp.data.data.items)
      .then(data => dispatch(action(EDIT_STUDENT.SUCCESS, data)))
      .catch(e => dispatch(actionFailed(EDIT_STUDENT, e)))
  }
}

export function post(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

function submit(values, method) {
  const id = values.id ? `/${values.id}` : ''

  return dispatch => {
    dispatch(action(SUBMIT_STUDENT.ACTION))
    return axios[method](`${config.API_URL}/students/${id}`, values)
      .then(resp => resp.data)
      .then(data => {
        dispatch(action(SUBMIT_STUDENT.SUCCESS, data))
        dispatch(fetchStudents())
        return data
      })
      .catch(e => dispatch(actionFailed(SUBMIT_STUDENT, e)))
  }
}

export function destroy(id) {
  return dispatch => {
    dispatch(action(REMOVE_STUDENT.ACTION))
    return axios
      .delete(`${config.API_URL}/students/${id}`)
      .then(resp => resp.data)
      .then(data => {
        dispatch(action(REMOVE_STUDENT.SUCCESS, data))
        dispatch(fetchStudents())
        return data
      })
      .catch(e => actionFailed(REMOVE_STUDENT.FAILURE, e))
  }
}
