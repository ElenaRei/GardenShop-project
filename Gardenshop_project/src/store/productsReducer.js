const defaultState = {
  products: [],
  category: {},
}

const GET_PRODUCTS = 'GET_PRODUCTS'


export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload.data,
        category: action.payload.category,
      }
    
    default:
      return state
  }
}

export const getProductsAction = (payload) => ({ type: GET_PRODUCTS, payload })

export const filteredProducts = (store, filters = [], payload, sort) => {
  let filtered1 = filters.includes('discount')
    ? store.products.products.filter((item) => item.discont_price)
    : store.products.products

  filtered1 =
    filters.includes('fromTo') && payload
      ? filtered1.filter(
          (item) =>
            (item.discont_price
              ? item.discont_price >= payload.from
              : item.price >= payload.from) &&
            (item.discont_price
              ? item.discont_price <= payload.to
              : item.price <= payload.to),
        )
      : filtered1

      if (sort) {
        if (sort === 'asc') {
          filtered1.sort((a, b) =>
            a.discont_price
              ? a.discont_price > b.discont_price
                ? 1
                : -1
              : a.price > b.price
              ? 1
              : -1,
          )
        } else if (sort === 'desc') {
          filtered1.sort((a, b) =>
            a.discont_price
              ? a.discont_price < b.discont_price
                ? 1
                : -1
              : a.price < b.price
              ? 1
              : -1,
          )
        } else if (sort === 'default') {
          filtered1.sort((a, b) => (a.id > b.id ? 1 : -1))
        } else if (sort === 'title') {
          filtered1.sort((a, b) => (a.title > b.title ? 1 : -1))
        }
      }

      return filtered1
    }
