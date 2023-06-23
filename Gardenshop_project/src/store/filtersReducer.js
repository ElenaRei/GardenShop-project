const SET_FILTER = 'SET_FILTER'
const DELETE_FILTER = 'DELETE_FILTER'
const ADD_FROM_TO = 'ADD_FROM_TO'
const ADD_SORT = 'ADD_SORT'

const defaultState = {
  filters: [],
  fromTo: {},
  sort: 'default',
}

export const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      }
    case DELETE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.payload),
      }
    case ADD_FROM_TO:
      return {
        ...state,
        fromTo: action.payload,
      }
    case ADD_SORT:
      return {
        ...state,
        sort: action.payload,
      }
    default:
      return state
  }
}

export const setFilteredProductsAction = (filter) => ({
  type: SET_FILTER,
  payload: filter,
})

export const deleteFilteredProductsAction = (filter) => ({
  type: DELETE_FILTER,
  payload: filter,
})

export const addFromToProductsAction = (obj) => ({
  type: ADD_FROM_TO,
  payload: obj,
})

export const addSortProductsAction = (sort) => ({
  type: ADD_SORT,
  payload: sort,
})