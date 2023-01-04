import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getApiUrl } from './urlHelpers';

export const apiGet = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  return axios.get(getApiUrl(url), config);
};

export const apiPost = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  return axios.post(getApiUrl(url), data, config);
};
