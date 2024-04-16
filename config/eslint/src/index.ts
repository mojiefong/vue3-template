/**
 * @Author: Mojie
 * @Date: 2024-04-09 16:27:50
 */

import { antfu } from '@antfu/eslint-config'

export function defineConfig() {
  return antfu({
    unocss: true,
    vue: true,
    typescript: true,
    rules: {
      'no-unused-vars': 'off',
      'camelcase': [2, { properties: 'always' }],
      'no-console': 'off',
      'curly': 'off',
      'antfu/if-newline': 'off',
      'brace-style': 'off',
      'style/brace-style': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
    },
  })
}
