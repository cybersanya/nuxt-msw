# nuxt-msw

[//]: # ([![npm version][npm-version-src]][npm-version-href])

[//]: # ([![npm downloads][npm-downloads-src]][npm-downloads-href])

[//]: # ([![License][license-src]][license-href])

[//]: # ([![Nuxt][nuxt-src]][nuxt-href])

Mock api with [MSW](https://mswjs.io) in your Nuxt app

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-msw?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Zero config integration with [MSW](https://mswjs.io)
- 🚠 &nbsp;Works both in the browser and on the server during SSR

## Quick Setup

1. Add `nuxt-msw` and `msw` dependencies to your project

```bash
# Using pnpm
pnpm add -D nuxt-msw msw

# Using yarn
yarn add --dev nuxt-msw msw

# Using npm
npm install --save-dev nuxt-msw msw
```

2. Add `nuxt-msw` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-msw'
  ],
  msw: {
    /* module options */
  }
})
```

3. Write some [request handlers](https://mswjs.io/docs/basics/mocking-responses) in `msw/handlers.ts`.

```ts
import { http, HttpResponse } from 'msw'

export default [
  http.get('https://example.com/api/user/1', () => HttpResponse.json({
    id: 12,
    name: 'Albert Einstein'
  })),
  http.post('https://example.com/api/user', () => HttpResponse.text('OK')),
]
```

That's it! Now the specified requests are intercepted by MSW both in the browser and on the server during SSR ✨

```ts
const { data } = useFetch('https://example.com/api/user/1')
watch(data, (value) => {
  console.log(value) // { id: 12, name: 'Albert Einstein' }
})
```

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn run dev:prepare

# Develop with the playground
yarn run dev

# Build the playground
yarn run dev:build

# Run ESLint
yarn run lint

# Run Vitest
yarn run test
yarn run test:watch

# Release new version
yarn run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-msw/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-msw

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-msw.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-msw

[license-src]: https://img.shields.io/npm/l/nuxt-msw.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-msw

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
