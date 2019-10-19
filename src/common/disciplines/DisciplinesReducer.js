import { EDIT_DISCIPLINE, FETCH_DISCIPLINE } from './DisciplinesActions'

const INITIAL_STATE = {
  items: [],
  roles: [],
  editingDiscipline: null,
  filters: {
    code: '',
    name: '',
    period: '',
  },
  page: 1,
  totalSize: 0,
  sizePerPage: 10,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DISCIPLINE.SUCCESS:
      return {
        ...state,
        items: action.payload.data.data.items,
        filters: action.payload.filters,
      }
    case EDIT_DISCIPLINE.SUCCESS:
      return {
        ...state,
        editingDiscipline: action.payload.items,
      }
    case 'DISCIPLINE_INITIALIZE':
      return {
        ...state,
      }
    default:
      return state
  }
}

export const getDisciplineListData = state => {
  return {
    items: state.discipline.items,
    filters: state.discipline.filters,
  }
}

export const getEditingDiscipline = state => {
  return {
    discipline: state.discipline.editingDiscipline,
    filters: state.discipline.filters,
  }
}
