/**
 * @Author: Mojie
 * @Date: 2024-04-11 09:25:12
 */

import type { UserConfig } from 'vite'
import { defineConfig, loadEnv, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createHtmlPlugin } from 'vite-plugin-html'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { commonConfig } from './common'

export function defineAppConfig(config: UserConfig = {}) {
  dayjs.extend(utc)
  dayjs.extend(timezone)

  return defineConfig(({ mode }) => {
    const env = loadEnv(mode, '../../', '')

    const appConfig: UserConfig = {
      server: createProxy(env),
      plugins: [
        vue(),
        vueJsx(),
        UnoCSS(),
        AutoImport({
          dts: '../../types/auto-imports.d.ts',
          imports: ['vue', 'vue-router', 'pinia'],
          resolvers: [
            ElementPlusResolver(),
          ],
        }),
        Components({
          resolvers: [
            IconsResolver({
              prefix: 'icon',
            }),
            ElementPlusResolver(),
          ],
        }),
        Icons({
          autoInstall: true,
          compiler: 'vue3',
        }),
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              buildTime: dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
            },
          },
        }),
      ],
    }

    const mergedConfig = mergeConfig(commonConfig(env), appConfig)
    return mergeConfig(mergedConfig, config)
  })
}

/**
 * 创建代理
 * @param env 环境变量
 */
function createProxy(env: Record<string, string>) {
  if (env.NODE_ENV === 'production') return {}

  const prefixs = JSON.parse(env.VITE_BASE_API_PREFIXS) as string[]
  const apiUrl = env.VITE_BASE_API_URL

  return prefixs.reduce((pre: Record<string, string>, cur) => {
    pre[cur] = apiUrl
    return pre
  }, {})
}
