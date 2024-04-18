import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { getAccessToken } from '@renderer/utils/cache'
import type { AppRouteMeta, AppRouteRecordRaw } from './types'

const routes: AppRouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@renderer/views/login.vue'),
    meta: { title: '登录' },
  },
]

const router = createRouter({
  history: import.meta.env.VITE_ROUTER_MODE === 'hash'
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
  strict: true, // 是否应该禁止尾部斜杠。默认为假
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach((to, _from, next) => {
  const { title, auth } = to.meta as AppRouteMeta
  if (title) {
    document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
  }
  if (auth) {
    if (getAccessToken()) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router
