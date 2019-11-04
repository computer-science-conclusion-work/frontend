// IMPORTS
// Externals imports (Dependencies)
import axios from 'axios'

// Internal imports
import config from '../../config'
import consts from '../../consts'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const REMOVE_DISCIPLINE = createAsyncConst('REMOVE_DISCIPLINE')
export const SUBMIT_DISCIPLINE = createAsyncConst('SUBMIT_DISCIPLINE')
export const FETCH_DISCIPLINE = createAsyncConst('FETCH_DISCIPLINE')
export const EDIT_DISCIPLINE = createAsyncConst('EDIT_DISCIPLINE')

export const FETCH_PREREQUISITES = createAsyncConst('FETCH_PREREQUISITES')
export const FETCH_COREQUISITES = createAsyncConst('FETCH_COREQUISITES')

export function fetchDisciplines(page, filters = [], rows) {
  return dispatch => {
    dispatch(action(FETCH_DISCIPLINE.ACTION))
    return axios
      .get(
        `${config.API_URL}/disciplines?filters=${JSON.stringify(
          filters
        )}&&page=${page}&&rows=${rows || consts.DEFAULT_PAGINATION}`,
        {
          page,
          filters,
        }
      )
      .then(resp => {
        dispatch(action(FETCH_DISCIPLINE.SUCCESS, {data: resp.data, filters: filters}))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_DISCIPLINE, e)))
  }
}

export function edit(id) {
  return dispatch => {
    dispatch(action(EDIT_DISCIPLINE.ACTION, { id }))
    return axios
      .get(`${config.API_URL}/disciplines/${id}`)
      .then(resp => dispatch(action(EDIT_DISCIPLINE.SUCCESS, resp.data.data)))
      .catch(e => dispatch(actionFailed(EDIT_DISCIPLINE, e)))
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
    dispatch(action(SUBMIT_DISCIPLINE.ACTION))
    return axios[method](`${config.API_URL}/disciplines${id}`, values)
      .then(resp => {
        dispatch(action(SUBMIT_DISCIPLINE.SUCCESS, resp.data))
        dispatch(fetchDisciplines(null, filters))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(SUBMIT_DISCIPLINE, e)))
  }
}

export function destroy(id, filters = []) {
  return dispatch => {
    dispatch(action(REMOVE_DISCIPLINE.ACTION))
    return axios
      .delete(`${config.API_URL}/disciplines/${id}`)
      .then(resp => {
        dispatch(action(REMOVE_DISCIPLINE.SUCCESS, resp.data))
        dispatch(fetchDisciplines(null, filters))
        return resp.data
      })
      .catch(e => actionFailed(REMOVE_DISCIPLINE.FAILURE, e))
  }
}

export function fetchPrerequisites(id) {
  return dispatch => {
    dispatch(action(FETCH_PREREQUISITES.ACTION))
    return axios
      .get(
        `${config.API_URL}/disciplines/${id}/prerequisites`
      )
      .then(resp => {
        dispatch(action(FETCH_PREREQUISITES.SUCCESS, resp.data.data))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(FETCH_PREREQUISITES, e)))
  }
}

export function fetchCorequisites(id) {
  return dispatch => {
    dispatch(action(FETCH_COREQUISITES.ACTION))
    return axios
      .get(
        `${config.API_URL}/disciplines/${id}/corequisites`
      )
      .then(resp => {
        dispatch(action(FETCH_COREQUISITES.SUCCESS, resp.data.data))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(FETCH_COREQUISITES, e)))
  }
}
