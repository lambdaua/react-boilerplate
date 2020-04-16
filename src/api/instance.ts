import axios, {AxiosInstance} from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    if (!config.headers.authorization) {
      config.headers.authorization = localStorage.getItem('access_token');
    }

    return config;
  },
  (error) => Promise.reject(error),
);
