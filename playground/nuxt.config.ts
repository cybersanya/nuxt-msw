export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  msw: {
    enabled: true,
  }
})
