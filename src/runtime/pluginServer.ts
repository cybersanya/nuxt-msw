import { createFetch } from 'ofetch'
import { setupServer } from 'msw/node'
import { defineNuxtPlugin, handlers } from '#imports'

export default defineNuxtPlugin(() => {
  const server = setupServer(...handlers)
  server.listen({
    onUnhandledRequest: 'bypass',
  })
  /*
    $fetch has to be reinited in order to make msw fetch interceptor work properly
  */
  // @ts-ignore
  globalThis.$fetch = createFetch()
})
