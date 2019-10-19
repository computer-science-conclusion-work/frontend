export default action => ({
  ACTION: `${action.toUpperCase()}`,
  ACTION: `${action.toUpperCase()}.ACTION`,
  FAILURE: `${action.toUpperCase()}.FAILURE`,
  SUCCESS: `${action.toUpperCase()}.SUCCESS`,
})
