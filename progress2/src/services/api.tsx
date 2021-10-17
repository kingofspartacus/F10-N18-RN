import axios, { AxiosRequestConfig } from 'axios'
export const instance = axios.create({
  baseURL: 'http://10.0.2.2:3000/api',
  //   timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getProduct = () => instance.get('/product')
export const getCategory = () => instance.get('/manufacturer')
// export const getHotpot = (setState: any) => {
//   axios({
//     method: 'GET',
//     url: 'http://10.0.2.2:3000/api/manufacturer',
//     data: null
//   })
//     .then((res) => { setState(res.data), console.log('res.data', res.data) })
//     .catch(err => { console.log(err) })
// }

