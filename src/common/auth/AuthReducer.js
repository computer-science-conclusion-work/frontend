import config from '../../config'
import {
  AUTHENTICATE,
  AUTHENTICATED_USER,
  CHECK_AUTH,
  LOGOUT,
} from './AuthActions'

export const userKey = `${config.storagePrefix}_user`
export const tokenKey = `${config.storagePrefix}_token`

const INITIAL_STATE = {
  forgotPassword: false,
  loading: false,
  modal: false,
  user: null,
  token: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE.SUCCESS:
      localStorage.setItem(tokenKey, JSON.stringify(action.payload))
      return { ...state, token: action.payload }
    case AUTHENTICATED_USER.SUCCESS:
      localStorage.setItem(userKey, JSON.stringify(action.payload.data.item))
      return { ...state, user: action.payload.data.item }
    case CHECK_AUTH:
      if (typeof localStorage !== 'undefined') {
        const newState = { ...state }
        const user = localStorage.getItem(userKey)
        if (user) {
          newState.user = JSON.parse(user)
        }
        const token = localStorage.getItem(tokenKey)
        if (token) {
          newState.token = JSON.parse(token)
        }
        return newState
      }

      return { ...state }
    case LOGOUT.SUCCESS:
      localStorage.removeItem(userKey)
      localStorage.removeItem(tokenKey)
      return { ...state, user: null, token: null }
    default:
      return state
  }
}
