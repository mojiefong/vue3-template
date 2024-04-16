/**
 * @Author: Mojie
 * @Date: 2024-04-09 16:17:20
 */

/**
 * @type {import('stylelint').Config}
 */
export function defineConfig() {
  return {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue/scss',
      'stylelint-config-recess-order',
      'stylelint-config-html/vue',
      '@stylistic/stylelint-config',
    ],
    rules: {
      'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
      'scss/at-if-closing-brace-space-after': 'always-intermediate',
      '@stylistic/block-closing-brace-newline-after': 'always-single-line',
      'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    },
  }
}
