export default action => ({
  ACTION: `${action.toUpperCase()}`,
  FAILURE: `${action.toUpperCase()}.FAILURE`,
  SUCCESS: `${action.toUpperCase()}.SUCCESS`,
})
