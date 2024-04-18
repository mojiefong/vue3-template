import type { AxiosError, RequestConfig, Response } from 'axios'
import axios from 'axios'
import { getAccessToken } from './cache'

const axiosConfig: RequestConfig = {
  baseURL: import.meta.env.VITE_CORE_API_URL,
  timeout: 30 * 1000,
  // meta: {
  //   retryRequest: true,
  //   retryCount: 3,
  // },
}

const Axios = axios.create(axiosConfig)

Axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.Authorization = `Bearer ${getAccessToken()}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

Axios.interceptors.response.use(
  (response: Response) => {
    const { data } = response
    // TODO 处理重连请求逻辑

    if (data.code !== 200) {
      // TODO 处理错误逻辑
      return Promise.reject(response)
    }

    return response
  },
  (error: AxiosError) => {
    // TODO 处理 http status 错误逻辑
    return Promise.reject(error)
  },
)

export default Axios
