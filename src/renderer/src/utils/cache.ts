import { ACCESS_TOKEN_KEY } from '@renderer/enums/cache-enum'

/**
 * 获取访问令牌
 */
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY)

/**
 * 设置访问令牌
 */
export const setAccessToken = (token: string) => localStorage.setItem(ACCESS_TOKEN_KEY, token)

/**
 * 移除访问令牌
 */
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY)
