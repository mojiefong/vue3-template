import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  rules: {
    'no-unused-vars': 'off',
    'camelcase': [2, { properties: 'always' }],
    'no-console': 'off',
    'curly': 'off',
    'brace-style': 'off',
    'style/brace-style': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/order-in-components': ['error', {
      order: [
        'name',
        'compilerOptions',
        'components',
        'functional',
        'directives',
        'extends',
        'mixins',
        ['provide', 'inject'],
        'inheritAttrs',
        'props',
        'emits',
        'setup',
        'data',
        'computed',
        'watch',
        'methods',
        ['template', 'render'],
      ],
    }],
  },
})
