import { isPlainObj } from './util'
import { type } from 'os'

export function transformRequest(data: any) {
  if (isPlainObj(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
      // tslint:disable-next-line:no-empty
    } catch (e) {}
  }
  return data
}
