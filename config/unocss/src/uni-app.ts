/**
 * @Author: Mojie
 * @Date: 2024-04-11 16:48:07
 */

import type { UserConfig } from 'unocss'
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { commonConfig } from './common'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export function defineUniConfig(config: UserConfig = {}) {
  const appConfig: UserConfig = {
    presets: [
      presetWeapp(),
      presetWeappAttributify(),
    ],
    transformers: [
      transformerAttributify(),
      transformerClass(),
      transformerDirectives(),
    ],
    theme: {
      fontSize: {
        'xs': ['20rpx', '32rpx'],
        'sm': ['24rpx', '36rpx'],
        'base': ['28rpx', '40rpx'],
        'lg': ['32rpx', '44rpx'],
        'xl': ['36rpx', '48rpx'],
        '2xl': ['40rpx', '52rpx'],
      },
      colors: {
        theme: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(-color-info)',

        h1: 'var(--color-text-primary)',
        h2: 'var(--color-text-regular)',
        h3: 'var(--color-text-secondary)',

        /* placeholder: 'var(--color-text-placeholder)', */
        /* disabled: 'var(--color-text-disabled)', */
        /* link: 'var(--color-text-link)', */
      },
      backgroundColor: {
        base: 'var(--background-color-base)',
      },
      borderColor: {
        light: 'var(--border-color-light)',
        lighter: 'var(--border-color-lighter)',
      },
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}rpx` })],
        [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}rpx` })],
        [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}rpx` })],
        [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}rpx` })],
        [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}rpx` })],
        [/^mx-(\d+)$/, ([, d]) => ({ margin: `0 ${d}rpx` })],
        [/^my-(\d+)$/, ([, d]) => ({ margin: `${d}rpx 0` })],
        [/^m-x-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}rpx`, 'margin-right': `${d}rpx` })],
        [/^m-y-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}rpx`, 'margin-bottom': `${d}rpx` })],

        [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}rpx` })],
        [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}rpx` })],
        [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}rpx` })],
        [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}rpx` })],
        [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}rpx` })],
        [/^px-(\d+)$/, ([, d]) => ({ padding: `0 ${d}rpx` })],
        [/^py-(\d+)$/, ([, d]) => ({ padding: `${d}rpx 0` })],
        [/^p-y-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}rpx`, 'padding-bottom': `${d}rpx` })],
        [/^p-x-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}rpx`, 'padding-right': `${d}rpx` })],

        [/^w-(\d+)$/, ([, d]) => ({ width: `${d}rpx` })],
        [/^h-(\d+)$/, ([, d]) => ({ height: `${d}rpx` })],

        [/^top-(\d+)$/, ([, d]) => ({ top: `${d}rpx` })],
        [/^bottom-(\d+)$/, ([, d]) => ({ bottom: `${d}rpx` })],
        [/^left-(\d+)$/, ([, d]) => ({ left: `${d}rpx` })],
        [/^right-(\d+)$/, ([, d]) => ({ right: `${d}rpx` })],

        [/^rd-(\d+)$/, ([, d]) => ({ 'border-radius': `${d}rpx` })],
        [/^lh-(\d+)$/, ([, d]) => ({ 'line-height': `${d}rpx` })],

        [/^gap-(\d+)$/, ([, d]) => ({ gap: `${d}rpx` })],
        [/^gap-y-(\d+)$/, ([, d]) => ({ gap: `${d}rpx 0` })],
        [/^gap-x-(\d+)$/, ([, d]) => ({ gap: `0 ${d}rpx` })],

        [/^rd-t-(\d+)$/, ([, d]) => ({ 'border-top-left-radius': `${d}rpx`, 'border-top-right-radius': `${d}rpx` })],
        [/^rd-b-(\d+)$/, ([, d]) => ({ 'border-bottom-left-radius': `${d}rpx`, 'border-bottom-right-radius': `${d}rpx` })],
      ],
    },
  }

  return defineConfig({ ...commonConfig, ...appConfig, ...config })
}
