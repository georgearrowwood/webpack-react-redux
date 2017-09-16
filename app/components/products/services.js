import request from '../../modules/request'

export default {
  getList: function () {
    return request.get('/api/products')
  },

  addOne: function (title) {
    return request.post('/api/products', {product: {title: title}});
  },

  deleteOne: function (id) {
    return request.delete('/api/products/' + id)
  }
}
