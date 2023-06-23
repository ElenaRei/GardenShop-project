import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './productsReducer'
import { categoriesReducer } from './categoriesReducer'
import { formReducer } from './formReducer'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'
import { filtersReducer } from './filtersReducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  form: formReducer,
  product: productReducer,
  cart: cartReducer,
  filters: filtersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
