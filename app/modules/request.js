import axios from 'axios';

import config from './config';

export default {
  get: url => axios.get(config.apiUrl + url),

  put: (url, payload) => axios.put(config.apiUrl + url, payload),

  post: (url, payload) => axios.post(config.apiUrl + url, payload),

  delete: (url, payload) => axios.delete(config.apiUrl + url, payload),
};
