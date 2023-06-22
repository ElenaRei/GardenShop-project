import { getProductsAction } from '../store/productsReducer'
import { getCategoriesAction } from '../store/categoriesReducer'
import { getProductAction } from '../store/productReducer'
import {
  getResultActionCreator,
  getResultOrderActionCreator,
  getResultSaleActionCreator,
} from '../store/formReducer'

export const base_url = 'http://localhost:3333'

const products_url = base_url + '/products/all'
const categories_url = base_url + '/categories/all'
const product_url = base_url + '/products/'

// GET requests
export const fetchProductList = () => {
  return function (dispatch) {
    fetch(products_url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          getProductsAction({
            data: data,
            category: { title: 'All products' },
          }),
        )
      })
  }
}

export const fetchCategoriesList = () => {
  return function (dispatch) {
    fetch(categories_url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategoriesAction(data)))
  }
}

export const fetchProductListByCategory = (categoryId) => {
  return function (dispatch) {
    fetch(base_url + '/categories/' + categoryId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(
          getProductsAction({ data: data.data, category: data.category }),
        )
      })
  }
}

export const fetchProduct = (productId) => {
  return function (dispatch) {
    fetch(product_url + productId)
      .then((data) => data.json())
      .then((data) => dispatch(getProductAction(data[0])))
  }
}

// POST request
// отправка заявки на купон
export const fetchSalePost = (value) => {
  return function (dispatch) {
    fetch(base_url + '/sale/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(value),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(getResultSaleActionCreator(data))
      })
  }
}

// POST request
// отправка заказа на сервер
export const fetchOrderPost = (value) => {
  return function (dispatch) {
    fetch(base_url + '/order/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(value),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(getResultOrderActionCreator(data))
        alert(data.message)
      })
  }
}
