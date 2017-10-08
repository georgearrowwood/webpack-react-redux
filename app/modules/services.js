import axios from 'axios';
import cookie from 'react-cookies';

import config from './config';

export default {
  configureInstance(baseUrl, options) {
    if (!baseUrl) throw new Error('no base url passed for request instance creation');
    const params = {
      baseURL: baseUrl,
    };
    if (options.headers) {
      params.headers = { ...options.headers };
    }
    if (options.timeout) params.timeout = options.timeout;
    return axios.create(params);
  },

  getInstance() {
    const userToken = cookie.load('userToken');
    const params = {};
    if (userToken) {
      params.headers = {
        Authorization: userToken,
      };
    }
    return this.configureInstance(config.apiUrl, params);
  },

  get(url) {
    return this.getInstance()
      .get(config.apiUrl + url)
      .catch(this.errorHandler);
  },

  put(url, payload) {
    return this.getInstance()
      .put(config.apiUrl + url, payload)
      .catch(this.errorHandler);
  },

  post(url, payload) {
    return this.getInstance()
      .post(config.apiUrl + url, payload)
      .catch(this.errorHandler);
  },

  delete(url, payload) {
    return this.getInstance()
      .delete(config.apiUrl + url, payload)
      .catch(this.errorHandler);
  },

  errorHandler(e) {
    const response = {
      status: e.response.status,
      statusText: e.response.statusText,
      error: e.response.data.error ? e.response.data.error : e.response.data.error,
    };
    return response;
  },
};
