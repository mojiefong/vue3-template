/**
 * @Author: Mojie
 * @Date: 2024-04-11 16:16:00
 */

import type { UserConfig } from 'unocss'
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { commonConfig } from './common'

export function defineAppConfig(config: UserConfig = {}) {
  const appConfig: UserConfig = {
    presets: [
      presetUno(),
      presetAttributify(),
    ],
    transformers: [
      transformerDirectives(),
    ],
    theme: {
      colors: {
        // 主色
        'theme': 'var(--color-primary)',
        'theme-hover': 'var(--color-primary-hover)',

        // 辅助色
        'success': 'var(--color-success)',
        'success-hover': 'var(--color-success-hover)',
        'warning': 'var(--color-warning)',
        'warning-hover': 'var(--color-warning-hover)',
        'danger': 'var(--color-danger)',
        'danger-hover': 'var(--color-danger-hover)',
        'info': 'var(--color-info)',
        'info-hover': 'var(--color-info-hover)',

        // 字体色
        'primary': 'var(--color-text-primary)',
        'regular': 'var(--color-text-regular)',
        'secondary': 'var(--color-text-secondary)',
        'placeholder': 'var(--color-text-placeholder)',
        'disabled': 'var(--color-text-disabled)',
        'link': 'var(--color-text-link)',
        'link-hover': 'var(--color-text-link-hover)',
      },
      backgroundColor: {
        base: 'var(--background-color-base)',
      },
      borderColor: {
        base: 'var(--border-color-base)',
        light: 'var(--border-color-light)',
        lighter: 'var(--border-color-lighter)',
        placeholder: 'var(--border-color-placeholder)',
        hover: 'var(--border-color-hover)',
        disabled: 'var(--border-color-disabled)',
      },
    },
  }

  return defineConfig({ ...commonConfig, ...appConfig, ...config })
}
