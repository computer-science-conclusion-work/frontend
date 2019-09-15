// IMPORTS
// Internals
import { SNACKBAR, SNACKBAR_CLEAR } from './MainActions'

const INITIAL_STATE = {
  snackbar: null,
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
    default:
      return state
  }
}

export const getSnackbar = store => store.main.snackbar
