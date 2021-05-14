import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000
});

service.interceptors.request.use(
  config => {
    // TODO: Token绑定
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.code !== 0) {
      return Promise.reject(new Error(res.message || 'Error'));
    }

    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
