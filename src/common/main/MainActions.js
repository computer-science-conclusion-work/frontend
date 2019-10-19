export const SNACKBAR_CLEAR = 'SNACKBAR_CLEAR'
export const SNACKBAR = {
  HARDFAIL: 'SNACKBAR.HARDFAIL',
  SOFTFAIL: 'SNACKBAR.SOFTFAIL',
  SOFTSUCCESS: 'SNACKBAR.SOFTSUCCESS',
}
export const loading = 'loading'

export function clearSnackbar() {
  return { type: SNACKBAR_CLEAR }
}
