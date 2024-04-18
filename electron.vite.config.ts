/**
 * @Author: Mojie
 * @Date: 2024-04-17 08:42:53
 */
import { resolve } from 'node:path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        dts: '../../types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia'],
      }),
      Components({
        dts: '../../types/components.d.ts',
        resolvers: [
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
})
