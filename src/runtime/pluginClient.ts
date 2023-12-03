import { defineNuxtPlugin, handlers } from '#imports'
import { setupWorker } from 'msw/browser'

export default defineNuxtPlugin(async () => {
  const worker = setupWorker(...handlers)
  await worker.start({
    onUnhandledRequest: 'bypass',
  })
})
