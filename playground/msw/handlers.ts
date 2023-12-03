import { http, HttpResponse } from 'msw'

export default [
  http.get('https://example.com/api/user/1', () => HttpResponse.json('foo')),
  http.get('https://example.com/api/user/2', () => HttpResponse.json('bar')),
]
