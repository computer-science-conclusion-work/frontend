// IMPORTS
// External
import axios from 'axios/index'

// Internal
import config from '../../config'
import consts from '../../consts'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const REMOVE_USER = createAsyncConst('REMOVE_USER')
export const SUBMIT_USER = createAsyncConst('SUBMIT_USER')
export const FETCH_USER = createAsyncConst('FETCH_USER')
export const EDIT_USER = createAsyncConst('EDIT_USER')

export const FETCH_ROLES = createAsyncConst('FETCH_ROLES')

export function fetchUsers(page, filters = [], rows) {
  return dispatch => {
    dispatch(action(FETCH_USER.ACTION))
    return axios
      .get(`${config.API_URL}/users?filters=${JSON.stringify(
          filters
        )}&&page=${page}&&rows=${rows || consts.DEFAULT_PAGINATION}`, {
        page,
        filters,
      })
      .then(resp => {
        dispatch(action(FETCH_USER.SUCCESS, { data: resp.data, filters: filters }))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(FETCH_USER, e)))
  }
}

export function fetchRoles() {
  return dispatch => {
    dispatch(action(FETCH_ROLES.ACTION))
    return axios
      .get(`${config.API_URL}/roles`)
      .then(resp => {
        dispatch(action(FETCH_ROLES.SUCCESS, resp.data))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_ROLES, e)))
  }
}

export function edit(id) {
  return dispatch => {
    dispatch(action(EDIT_USER.ACTION, { id }))
    return axios
      .get(`${config.API_URL}/users/${id}`)
      .then(resp => dispatch(action(EDIT_USER.SUCCESS, resp.data.data)))
      .catch(e => dispatch(actionFailed(EDIT_USER, e)))
  }
}

export function post(values, filters = []) {
  return submit(values, 'post', filters)
}

export function update(values, filters = []) {
  return submit(values, 'put', filters)
}

function submit(values, method, filters = []) {
  const id = values.id ? `/${values.id}` : ''

  return dispatch => {
    dispatch(action(SUBMIT_USER.ACTION))
    return axios[method](`${config.API_URL}/users${id}`, values)
      .then(resp => {
        dispatch(action(SUBMIT_USER.SUCCESS, resp.data))
        dispatch(fetchUsers(null, filters))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(SUBMIT_USER, e)))
  }
}

export function destroy(id, filters = []) {
  return dispatch => {
    dispatch(action(REMOVE_USER.ACTION))
    return axios
      .delete(`${config.API_URL}/users/${id}`)
      .then(resp => {
        dispatch(action(REMOVE_USER.SUCCESS, resp.data))
        dispatch(fetchUsers(null, filters))
        return resp.data
      })
      .catch(e => actionFailed(REMOVE_USER.FAILURE, e))
  }
}
