import services from './services';

export const requestProducts = () => ({
  type: 'REQUEST_PRODUCTS',
});

export const receiveProducts = data => ({
  type: 'RECEIVE_PRODUCTS',
  products: data,
});

export const fetchProducts = () => (dispatch, getState) => {
  const state = getState();
  if (state.isFetching) return false;

  dispatch(requestProducts());
  return services().getList()
    .then(data => dispatch(receiveProducts(data.data.products)));
};

export const addProduct = data => (dispatch) => {
  services().addOne(data.title)
    .then(() => {
      dispatch(fetchProducts());
    });
};

export const deleteProduct = id => dispatch =>
  services().deleteOne(id)
    .then(() => {
      dispatch(fetchProducts());
    });
