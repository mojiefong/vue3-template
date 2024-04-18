import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  ignores: ['out'],
  rules: {
    'no-unused-vars': 'off',
    'camelcase': [2, { properties: 'always' }],
    'no-console': 'off',
    'curly': 'off',
    'brace-style': 'off',
    'style/brace-style': 'off',
    'antfu/if-newline': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
  },
})
