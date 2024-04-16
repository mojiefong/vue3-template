/**
 * @Author: Mojie
 * @Date: 2024-04-11 09:43:34
 */

import { resolve } from 'node:path'
import process from 'node:process'
import type { UserConfig } from 'vite'

export function commonConfig(env: Record<string, string>): UserConfig {
  return {
    envDir: '../../',
    base: env.BASE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve(process.cwd(), 'src'),
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
  }
}
