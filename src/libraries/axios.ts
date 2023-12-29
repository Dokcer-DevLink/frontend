import { ADDRESS_API_URL, API_URL } from '@/configurations';
import { storage } from '@/utils/storage';
import Axios, { InternalAxiosRequestConfig } from 'axios';

const axiosRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    const accessToken = storage.getValue('accessToken');
    const refreshToken = storage.getValue('refreshToken');
    const userUuid = storage.getValue('userUuid');
    if (accessToken && refreshToken && userUuid) {
      config.headers.Authorization = 'Bearer ' + accessToken;
      config.headers.refreshToken = refreshToken;
      config.headers.userUuid = userUuid;
    }
    if (accessToken && refreshToken) {
    }
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(axiosRequestInterceptor);

export const addressRequest = Axios.create({
  baseURL: ADDRESS_API_URL,
});

// axios.interceptors.response.use((response) => {
//   return response;
// });
