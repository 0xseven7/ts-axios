import * as dataHandle from './data'
describe('test data', () => {
  test('transfom data', () => {
    const obj = { a: 1, b: 2 }
    expect(dataHandle.transformData(obj)).toBe(JSON.stringify(obj))
    expect(dataHandle.transformData('string')).toBe('string')
    expect(dataHandle.transformData(Buffer.from([0x00, 0x01]))).toEqual(
      Buffer.from([0x00, 0x01])
    )
  })
})
