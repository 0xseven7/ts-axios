import { isObj } from './utils'
export function transformRequest(data: any): any {
  if (isObj(data)) {
    return JSON.stringify(data)
  }
  return data
}
