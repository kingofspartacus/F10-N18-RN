import axios, { AxiosRequestConfig } from 'axios'
export const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  //   timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getProduct = (params: AxiosRequestConfig | undefined) => instance.get('/v2/menu', params)
export const getCate = (params: AxiosRequestConfig | undefined) => instance.get('/v2/category/web', params)

