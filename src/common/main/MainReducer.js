// IMPORTS
// Internals
import { SNACKBAR, SNACKBAR_CLEAR, loading } from './MainActions'

const INITIAL_STATE = {
  snackbar: null,
  loadingCircle: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SNACKBAR_CLEAR:
      return {
        ...state,
        snackbar: null,
      }
    case SNACKBAR.SOFTFAIL:
    case SNACKBAR.HARDFAIL:
      return {
        ...state,
        snackbar: {
          message: action.error.message,
          success: false,
        },
      }
    case SNACKBAR.SOFTSUCCESS:
      return {
        ...state,
        snackbar: {
          message: action.success.message,
          success: true,
        },
      }
    case loading:
      let status = state.loadingCircle === ''? 'active' : ''
      return {
        ...state,
        loadingCircle: status
      }
    default:
      return state
  }
}

export const getSnackbar = store => store.main.snackbar
