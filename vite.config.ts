import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createHtmlPlugin } from 'vite-plugin-html'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    base: env.BASE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: +env.DEV_SERVER_PORT,
      open: env.DEV_SERVER_OPEN === 'true',
    },
    build: {
      sourcemap: env.BUILD_SOURCEMAP === 'true',
      terserOptions: {
        compress: {
          /* eslint-disable camelcase */
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia'],
      }),
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
          IconsResolver({
            prefix: 'icon',
          }),
        ],
      }),
      Icons({
        autoInstall: true,
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
})
