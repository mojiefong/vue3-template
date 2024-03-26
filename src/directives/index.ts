import type { App } from 'vue'

const modules = import.meta.glob('./**/*.ts', { eager: true })

const directives = Object.keys(modules).reduce((acc: any, key) => {
  const reg = /\/([^/]+)\//
  const match = key.match(reg)

  if (match && match[1]) {
    acc[match[1]] = (modules as any)[key].default || {}
  }
  return acc
}, {})

export function setupDirectives(app: App) {
  Object.keys(directives).forEach((directive) => {
    app.directive(directive, directives[directive])
  })
}
