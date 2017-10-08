import services from '../../modules/services';

export default {
  getList: () => services.get('/api/products'),
  addOne: title => services.post('/api/products', { product: { title } }),
  deleteOne: id => services.delete(`/api/products/${id}`),
};
