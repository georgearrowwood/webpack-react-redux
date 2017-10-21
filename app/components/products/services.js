import servicesInstance from '../../modules/services';

export default (options) => {
  const instance = servicesInstance(options);
  return {
    getList: () => instance.get('/api/products'),
    addOne: title => instance.post('/api/products', { product: { title } }),
    deleteOne: id => instance.delete(`/api/products/${id}`),
  };
};
