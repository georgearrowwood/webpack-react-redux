import services from './services';

export const addProduct = (title) => (dispatch, getState) => {
  services.addOne(title)
  .then(() => {
    dispatch(fetchProducts());
  });
}

export const requestProducts = () => ({
  type: 'REQUEST_PRODUCTS'
})

export const receiveProducts = (data) => ({
  type: 'RECEIVE_PRODUCTS',
  products: data
})

export const fetchProducts = () => (dispatch, getState) => {
  const state = getState()
  if (state.isFetching) return false
  dispatch(requestProducts())
  services.getList()
    .then((data) => {
      dispatch(receiveProducts(data.data.products))
    })
}

export const deleteProduct = id => (dispatch) => {
  services.deleteOne(id)
    .then(() => {
      dispatch(fetchProducts());
    });
}

