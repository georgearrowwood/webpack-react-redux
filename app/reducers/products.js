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
      };
    case 'DELETE_PRODUCT':
      console.log('oooo', action);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
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
