import type { RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  meta?: AppRouteMeta
  children?: AppRouteRecordRaw[]
}

export interface AppRouteMeta {
  /** 页面标题 */
  title?: string

  /** icon图标 */
  icon?: string

  /** 权限控制 */
  menuId?: string

  /** 是否隐藏菜单 */
  hideMenu?: boolean

  /** 是否keepAlive */
  keepAlive?: boolean

  /** 是否需要授权 */
  auth?: boolean

  /** 排序 */
  sort?: number
}
