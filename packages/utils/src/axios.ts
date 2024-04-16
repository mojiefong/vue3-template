/**
 * @Author: Mojie
 * @Date: 2024-03-27 10:30:55
 */

import { getAccessToken } from '@mojie/utils'
import type { AxiosError, AxiosResponse } from 'axios'
import axios from 'axios'

const api = axios.create({
  timeout: 30 * 1000,
})

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken()

    if (accessToken) {
      config.headers.authorization = accessToken
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response

    if (data.code === 200) return response
    ElMessage.error(data.msg)
    return Promise.reject(response)
  },

  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export { api }
export default api
