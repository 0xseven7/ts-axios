import { isPlainObj } from './util'

export function transformData(data: any) {
  if (isPlainObj(data)) {
    return JSON.stringify(data)
  }
  return data
}
