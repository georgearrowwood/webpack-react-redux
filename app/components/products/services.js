import request from '../../modules/request';

export default {
  getList: () => request.get('/api/products'),
  addOne: title => request.post('/api/products', { product: { title } }),
  deleteOne: id => request.delete(`/api/products/${id}`),
};
