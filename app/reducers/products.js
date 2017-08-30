function products(state = {products: []}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [
          ...state.products,
          {
            text: action.title,
          }
        ]
      }
    case 'REQUEST_PRODUCTS':
      return {
        ...state,
        isFetching: true,
      }
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        isFetching: false,
        items: action.products,
      }
    default:
      // console.log('no reducer', action);
      return state
  }
}

export default products
