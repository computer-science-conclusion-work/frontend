// IMPORTS
// Externals imports (Dependencies)
import axios from 'axios'

// Internal imports
import config from '../../config'
import consts from '../../consts'
import action, { actionFailed } from '../../util/action'
import createAsyncConst from '../../util/createAsyncConst'

export const REMOVE_STUDENT = createAsyncConst('REMOVE_STUDENT')
export const SUBMIT_STUDENT = createAsyncConst('SUBMIT_STUDENT')
export const FETCH_STUDENT = createAsyncConst('FETCH_STUDENT')
export const EDIT_STUDENT = createAsyncConst('EDIT_STUDENT')

export const FETCH_STUDENT_DISCIPLINE = createAsyncConst('FETCH_STUDENT_DISCIPLINE')

export function fetchStudents(page, filters = [], rows) {
  return dispatch => {
    dispatch(action(FETCH_STUDENT.ACTION))
    return axios
      .get(
        `${config.API_URL}/students?filters=${JSON.stringify(
          filters
        )}&&page=${page}&&rows=${rows || consts.DEFAULT_PAGINATION}`,
        {
          page,
          filters,
        }
      )
      .then(resp => {
        dispatch(action(FETCH_STUDENT.SUCCESS, {data: resp.data, filters: filters}))
        return resp
      })
      .catch(e => dispatch(actionFailed(FETCH_STUDENT, e)))
  }
}

export function edit(id) {
  return dispatch => {
    dispatch(action(EDIT_STUDENT.ACTION, { id }))
    return axios
      .get(`${config.API_URL}/students/${id}`)
      .then(resp => dispatch(action(EDIT_STUDENT.SUCCESS, resp.data.data)))
      .catch(e => dispatch(actionFailed(EDIT_STUDENT, e)))
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
    dispatch(action(SUBMIT_STUDENT.ACTION))
    return axios[method](`${config.API_URL}/students${id}`, values)
      .then(resp => {
        dispatch(action(SUBMIT_STUDENT.SUCCESS, resp.data))
        dispatch(fetchStudents(null, filters))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(SUBMIT_STUDENT, e)))
  }
}

export function destroy(id, filters = []) {
  return dispatch => {
    dispatch(action(REMOVE_STUDENT.ACTION))
    return axios
      .delete(`${config.API_URL}/students/${id}`)
      .then(resp => {
        dispatch(action(REMOVE_STUDENT.SUCCESS, resp.data))
        dispatch(fetchStudents(null, filters))
        return resp.data
      })
      .catch(e => actionFailed(REMOVE_STUDENT.FAILURE, e))
  }
}

function fetchStudentDiscipline(id, stage_id) {
  return dispatch => {
    dispatch(action(FETCH_STUDENT_DISCIPLINE.ACTION))
    return axios
      .get(
        `${config.API_URL}/students/${id}/stage/${stage_id}`
      )
      .then(resp => {
        dispatch(action(FETCH_STUDENT_DISCIPLINE.SUCCESS, resp.data.data))
        return resp.data
      })
      .catch(e => dispatch(actionFailed(FETCH_STUDENT_DISCIPLINE, e)))
  }
}

// CURRICULUM
export function fetchCurriculum(id) {
  return fetchStudentDiscipline(id, consts.STAGE_CURRICULUM)
}

// EQUIVALENTS
export function fetchEquivalents(id) {
  return fetchStudentDiscipline(id, consts.STAGE_EQUIVALENT)
}

// EXTRA-CURRICULUM
export function fetchExtraCurriculum(id) {
  return fetchStudentDiscipline(id, consts.STAGE_EXTRA_CURRICULUM)
}

// ONGOING
export function fetchOngoing(id) {
  return fetchStudentDiscipline(id, consts.STAGE_ONGOING)
}

// TO_ATTEND
export function fetchToAttend(id) {
  return fetchStudentDiscipline(id, consts.STAGE_TO_ATTEND)
}

// CURRICULUM
export function fetchCurriculumEquivalents(id) {
  return fetchStudentDiscipline(id, consts.STAGE_CURRICULUM_EQUIVALENTS)
}