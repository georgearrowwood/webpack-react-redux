import services from '../../modules/services';

export default {
  login: data => services.post('/api/login', data),
};
