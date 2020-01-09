import * as util from './util'

describe('util-test', () => {
  test('isPlainObj', () => {
    expect(util.isPlainObj('123')).toBeTruthy()
  })
  test('isDate', () => {
    const date = new Date()
    expect(util.isDate(date)).toBeTruthy()
  })
})
