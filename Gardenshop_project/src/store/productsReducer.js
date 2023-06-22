import { orderBy, sortBy } from "lodash"

const defaultState = {
  products: [],
  filteredProducts: [],
  category: {},
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FROM_AND_TO_PRODUCTS = 'FROM_AND_TO_PRODUCTS'
const DISCOUNT_PRODUCTS = 'DISCOUNT_PRODUCTS'

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload.data,
        filteredProducts: action.payload.data,
        category: action.payload.category,
      }
    case SORT_PRODUCTS: {
      let sortedProducts = [...state.products]
      if (action.payload === 'asc') {
        sortedProducts = sortBy(sortedProducts, function (item) { 
          return item.discont_price ? item.discont_price : item.price })
      } else if (action.payload === 'desc') {
        /*sortedProducts.sort((a, b) =>
          a.discont_price ? (a.discont_price < b.discont_price ? 1 : -1) :
            (a.price < b.price ? 1 : -1))*/
        sortedProducts = sortBy(sortedProducts, function (item) { 
          return item.discont_price ? item.discont_price : item.price })
        //sortedProducts =  orderBy(sortedProducts, ['price', 'discont_price'], ['desc'])
      } else if (action.payload === 'default') {
        sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1))
      } else if (action.payload === 'title') {
        sortedProducts.sort((a, b) => (a.title > b.title ? 1 : -1))
      }

      return {
        ...state,
        products: sortedProducts,
        filteredProducts: sortedProducts,
      }
    }
    case FROM_AND_TO_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (item) =>
          ((item.discont_price ? item.discont_price >= action.payload.from : item.price >= action.payload.from) &&
            (item.discont_price ? item.discont_price <= action.payload.to : item.price <= action.payload.to))
        ),
      }

    case DISCOUNT_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload
          ? state.products.filter((item) => item.discont_price)
          : state.products,
      }
    default:
      return state
  }
}

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload })

export const sortProductsAction = (sortType) => ({
  type: SORT_PRODUCTS,
  payload: sortType,
})

export const fromAndToFilterProductsAction = (fromAndTo) => ({
  type: FROM_AND_TO_PRODUCTS,
  payload: fromAndTo,
})

export const discountProductsAction = (check) => ({
  type: DISCOUNT_PRODUCTS,
  payload: check,
})
