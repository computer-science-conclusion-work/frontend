import { logout } from '../common/auth/AuthActions'

export default function action(type, payload = {}, error = false, putLoading = true) {
  const action = { type }
  if (payload) action.payload = payload
  if (error) action.error = error
  action.loading = putLoading
  return action
}

export function actionFailed(type, e, putLoading = true) {
  return dispatch => {
    let error = e.response.data.message

    if (e.response.status === 401) {
      return dispatch(logout())
    }

    if (typeof e.response.data.message === 'object') {
      error = e.response.data.message.map(err => err)
    }

    return dispatch(action(type.FAILURE, null, { message: error }, putLoading))
  }
}
