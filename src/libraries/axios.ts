import { API_URL } from '@/configurations';
import Axios, { InternalAxiosRequestConfig } from 'axios';

const axiosRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  return config;
};
export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(axiosRequestInterceptor);
