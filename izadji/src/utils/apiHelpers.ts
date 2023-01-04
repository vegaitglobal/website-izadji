import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const apiGet = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  return axios.get(process.env.REACT_APP_STRAPI_HOST + url, config);
};

export const apiPost = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  return axios.post(process.env.REACT_APP_STRAPI_HOST + url, data, config);
};
