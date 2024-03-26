import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    // 宽高满屏
    'wh-full': 'w-full h-full',
    // position 满屏
    'pos-full': 'fixed top-0 left-0 right-0 bottom-0',
    // position 水平居中 horizontal
    'pos-h-center': 'absolute left-50% transform -translate-x-50%',
    // flex 水平居中 horizontal
    'flex-h-center': 'flex justify-center',
    // position 垂直居中 vertical
    'pos-v-center': 'absolute top-50% transform -translate-y-50%',
    // flex 垂直居中 vertical
    'flex-v-center': 'flex items-center',
    // position 水平垂直居中
    'pos-center': 'absolute top-50% left-50% transform -translate-50%',
    // flex 水平垂直居中
    'flex-center': 'flex justify-center items-center',
  },
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
})
