import productsApi from './api/products'

export const addProduct = (title) => (dispatch, getState) => {
  return {
    type: 'ADD_PRODUCT',
    title
  }
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
  productsApi.getList()
    .then((data) => {
      dispatch(receiveProducts(data.data.products))
    })
}
