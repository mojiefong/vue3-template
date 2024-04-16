/**
 * @Author: Mojie
 * @Date: 2024-04-11 15:56:18
 */

// eslint-disable-next-line ts/no-unused-vars
import axios from 'axios'

declare module 'axios' {
  interface AxiosResult<T = any> {
    code: number
    result: T
    message: string
  }

  interface RequestConfig<T = any> extends AxiosRequestConfig<T> {
    /** 自定义元数据 */
    meta?: {
      /** 是否开启请求失败自动重连 */
      retryRequest?: boolean

      /** 重连次数。默认为 3 次 */
      retryCount?: number
    }
  }

  type Response<T = any> = AxiosResponse<AxiosResult<T>>

  export interface AxiosInstance {
    request: <T = any, R = Response<T>, D = any>(config: RequestConfig<D>) => Promise<R>
    get: <T = any, R = Response<T>, D = any>(url: string, config?: RequestConfig<D>) => Promise<R>
    delete: <T = any, R = Response<T>, D = any>(url: string, config?: RequestConfig<D>) => Promise<R>
    post: <T = any, R = Response<T>, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<R>
    put: <T = any, R = Response<T>, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<R>
    patch: <T = any, R = Response<T>, D = any>(url: string, data?: D, config?: RequestConfig<D>) => Promise<R>
  }
}
