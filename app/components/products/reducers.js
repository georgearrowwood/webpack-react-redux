function products(state = {}, action) {
  console.log('pr red', state);
  
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        isFetching: false,
        items: action.products,
      };
    default:
      return state;
  }
}

export default products;
