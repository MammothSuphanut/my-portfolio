// import axios, { AxiosRequestConfig } from 'axios';
// import { useToken } from '../store/BearerToken';
// /* eslint-disable @typescript-eslint/no-explicit-any */
// export const BASE_URL = import.meta.env.VITE_API_URL;
// const instance = axios.create({
//   baseURL: BASE_URL,
// });
// instance.interceptors.request.use(
//   function (config: any) {
//     const token = useToken.getState().token;
//     return {
//       ...config,
//       headers: {
//         ...config.headers,
//         Accept: 'application/json',
//         Authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
// export default instance;
// export const fetcher = async (url: string, config?: AxiosRequestConfig) => {
//   const res = await instance.get(url, config);
//   return res.data;
// };
