import * as urls from './urls'
describe('test-url-handle', () => {
  test('test serializedParams', () => {
    let params = {
      name: 'zx',
      info: { height: 170, weight: 70 },
      others: ['a', 'b', 'c']
    }
    console.log(urls.bindUrl('test', params))
  })
})
