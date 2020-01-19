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
    } catch (e) {
      console.log(e)
    }
  }
  return data
}
