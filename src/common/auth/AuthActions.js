// IMPORTS
// External
import axios from 'axios'

// Internal
import consts from '../../config'
import action from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const AUTHENTICATE = createAsyncConst('AUTHENTICATE')
export const AUTHENTICATED_USER = createAsyncConst('AUTHENTICATED_USER')
export const LOGOUT = createAsyncConst('LOGOUT')
export const CHECK_AUTH = 'CHECK_AUTH'

export function login(values) {
  values.grant_type = consts.API_GRANT
  values.client_id = consts.API_CLIENT
  values.client_secret = consts.API_SECRET
  return submit(values, `${consts.API_URL}/auth/login`)
}

export function fetchAuthenticatedUser() {
  return dispatch => {
    dispatch(action(AUTHENTICATED_USER.ACTION))
    axios
      .get(`${consts.API_URL}/users/init`)
      .then(resp => resp.data)
      .then(data => dispatch(action(AUTHENTICATED_USER.SUCCESS, data)))
      .catch(e =>
        dispatch(action(AUTHENTICATED_USER.FAILURE, null, e.response.data))
      )
  }
}

export function submit(values, url) {
  return dispatch => {
    dispatch(action(AUTHENTICATE.ACTION))
    axios
      .post(url, values)
      .then(resp => resp.data)
      .then(data => {
        dispatch(action(AUTHENTICATE.SUCCESS, data))
        fetchAuthenticatedUser()(dispatch)
      })
      .catch(e => dispatch(action(AUTHENTICATE.FAILURE, null, e.response.data)))
  }
}

export function logout() {
  return dispatch => {
    dispatch(action(LOGOUT.ACTION))
    return axios
      .get(`${consts.API_URL}/logout`)
      .then(data => {
        dispatch(action(LOGOUT.SUCCESS, data.data))
      })
      .catch(e => dispatch(action(LOGOUT.FAILURE, null, e.response.data)))
  }
}

export function checkAuth() {
  return action(CHECK_AUTH)
}
