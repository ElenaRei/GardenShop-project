const defaultState = {
    sale: { message: '', status: '' },
    order: {message: '', status: ''},
  }
  
  const POST_SALE_RESULT = 'POST_SALE_RESULT'
  const POST_ORDER_RESULT = 'POST_ORDER_RESULT'
  
  export const formReducer = (state = defaultState, action) => {
    switch (action.type) {
      case POST_SALE_RESULT:
        return {
          ...state,
          sale: action.payload,
        }
      case POST_ORDER_RESULT:
        return {
          ...state,
          order: action.payload,
        }
      default:
        return state
    }
  }
  
  //action creator
  export const getResultSaleActionCreator = (payload) => ({
    type: POST_SALE_RESULT,
    payload,
  })
  
  export const getResultOrderActionCreator = (payload) => ({
    type: POST_ORDER_RESULT,
    payload,
  })
  