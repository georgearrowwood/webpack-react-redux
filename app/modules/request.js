import axios from 'axios';
import config from './config';

export default {
  get: url => axios.get(config.apiServerUrl + url),

  put: (url, payload) => axios.put(config.apiServerUrl + url, payload),

  post: (url, payload) => axios.post(config.apiServerUrl + url, payload),

  delete: (url, payload) => axios.delete(config.apiServerUrl + url, payload),
};
