import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'

export interface ModuleOptions {
  enabled: boolean
  pathToHandlers: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-msw',
    configKey: 'msw',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup({ pathToHandlers = 'msw/handlers.ts', enabled = false }, nuxt) {
    if (!enabled) return
    const { resolve } = createResolver(import.meta.url)

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolve('./public'),
        maxAge: 60 * 60 * 24 * 365,
      })
    })
    addImports({
      from: resolve(nuxt.options.srcDir, pathToHandlers),
      name: 'default',
      as: 'handlers'
    })
    addPlugin({
      src: resolve('./runtime/pluginClient'),
      mode: 'client',
    })
    addPlugin({
      src: resolve('./runtime/pluginServer'),
      mode: 'server',
    })
  },
})
