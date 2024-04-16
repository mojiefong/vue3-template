/**
 * @Author: Mojie
 * @Date: 2024-01-30 10:30:09
 */

import { ACCESS_TOKEN_KEY } from '@mojie/enums'

/**
 * 获取用户访问令牌
 */
export const getAccessToken = () => sessionStorage.getItem(ACCESS_TOKEN_KEY)

/**
 * 设置用户访问令牌
 */
export const setAccessToken = (token: string) => sessionStorage.setItem(ACCESS_TOKEN_KEY, token)

/**
 * 清除用户访问令牌
 */
export const removeAccessToken = () => sessionStorage.removeItem(ACCESS_TOKEN_KEY)
