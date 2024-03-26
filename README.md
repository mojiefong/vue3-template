# Vue3 模板

一套简洁的 Vue3、TypeScript、Vite、Unocss、Axios、Vue Router、Pinia 开箱即用的模板。

## 特性

- 使用最新的 Vue3、TypeScript、Vite、Axios、Vue Router、Pinia 等技术栈
- 使用 UnoCSS 原子化 CSS 引擎
- 使用 unplugin-auto-import 自动导入 API
- 使用 unplugin-vue-components 自动导入组件
- 使用 unplugin-icons 自动导入图标
- 结合 antfu 大佬的 ESLint 代码检查 [@antfu/eslint-config
](https://github.com/antfu/eslint-config)
- 集成 Stylelint 检查 SCSS、CSS 代码
- 集成 Commitlint 检查 git commit 规范
- 结合 Husky + lint-staged 实现代码提交前的自动格式化和 ESLint、Stylelint、Commitlint 检查

## 环境要求

- Node.js >= 18
- pnpm 8

## 使用

```shell
git clone https://github.com/mojiefong/vue3-template.git

cd vue3-template

pnpm i
```

> 建议使用 pnpm。
> 本项目强制使用了 pnpm，如需修改删除 package.json 的 `"preinstall": "npx only-allow pnpm"` 脚本
