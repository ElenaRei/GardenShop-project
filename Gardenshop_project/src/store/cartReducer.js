const defaultState = {
    products: [],
    totalCart: 0,
    totalAmount: 0,
  }
  
  const ADD_TO_CART = 'ADD_TO_CART'
  const CLEAR_CART = 'CLEAR_CART'
  const INCR_ITEM = 'INCR_ITEM'
  const DECR_ITEM = 'DECR_ITEM'
  const REMOVE_ITEM = 'REMOVE_ITEM'
  
  const TOTAL_SUM = 'TOTAL_SUM'
  const TOTAL_AMOUNT = 'TOTAL_AMOUNT'
  
  export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const productCheck = state.products.find((product) => {
          return product.id === action.payload.id
        })
  
        return {
          ...state,
          products: productCheck
            ? state.products.map((item) => {
                if (item.id === action.payload.id) {
                  return {
                    ...item,
                    count: item.count + 1,
                  }
                }
                return item
              })
            : [...state.products, { ...action.payload, count: 1 }],
        }
      }
  
      case REMOVE_ITEM: {
        return {
          ...state,
          products: state.products.filter((item) => item.id !== action.payload),
        }
      }
  
      case TOTAL_SUM: {
        return {
          ...state,
          totalCart: state.products.reduce((sum, el) => {
            sum = sum + el.forTotal * el.count
            return sum
          }, 0),
        }
      }
  
      case TOTAL_AMOUNT: {
        return {
          ...state,
          totalAmount: state.products.reduce((sum, el) => {
            sum = sum + el.count
            return sum
          }, 0),
        }
      }
  
      case INCR_ITEM: {
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.id === action.payload) {
              const object = {
                ...item,
                count: item.count + 1,
              }
              return object
            }
            return item
          }),
        }
      }
  
      case DECR_ITEM: {
        return {
          ...state,
          products: state.products.map((item) => {
            if (item.id === action.payload) {
              const object = {
                ...item,
                count: item.count - 1,
              }
              return object
            }
            return item
          }),
        }
      }
      case CLEAR_CART:
        return {
          products: [],
          totalCart: 0,
          totalAmount: 0,
        }
  
      default:
        return state
    }
  }
  
  //action creator
  export const addProductAction = (payload) => ({ type: ADD_TO_CART, payload })
  export const deleteProductAction = (id) => ({ type: REMOVE_ITEM, payload: id })
  export const incrProductAction = (id) => ({ type: INCR_ITEM, payload: id })
  export const decrProductAction = (id) => ({ type: DECR_ITEM, payload: id })
  
  export const clearCartAction = { type: CLEAR_CART }
  export const totalSumAction = { type: TOTAL_SUM }
  export const totalAmountAction = { type: TOTAL_AMOUNT }
  