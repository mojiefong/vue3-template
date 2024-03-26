import type { AppRouteRecordRaw } from '@/router/types'

const modules = import.meta.glob('../router/modules/**/*.ts', { eager: true })
const asyncRoutes: AppRouteRecordRaw[] = Object.keys(modules).map(key => (modules as any)[key].default || {})
// 根据 meta.sort 排序
asyncRoutes.sort((a, b) => (a.meta?.sort ?? 0) - (b.meta?.sort ?? 0))

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<AppRouteRecordRaw[]>([])

  async function fetchAsyncRoutes() {
    // const { data } = await getMenus('7GE88MC7888PG08K')
    // routes.value = generateRoutes(asyncRoutes, data.menus)
  }

  // function generateRoutes(routes: AppRouteRecordRaw[], menus: any) {
  //   return routes.filter((item) => {
  //     const findMenu = menus.find((menu: any) => menu.source === item.meta?.menuId)
  //     if (findMenu) {
  //       if (findMenu.children?.length && item.children) {
  //         item.children = generateRoutes(item.children, findMenu.children)
  //       }
  //       return true
  //     }
  //     return false
  //   })
  // }

  return {
    routes,
    fetchAsyncRoutes,
  }
})
