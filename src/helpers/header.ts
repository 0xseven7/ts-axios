import {isPlainObject} from './utils'
import { transFormRequest } from './data'
function normalizeHeaderName (headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName]= headers[name]
      delete  headers[name]
    }
  })
}
export function processHeader (config: any): any {
  console.log(config);
  let {headers, data} = config
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (!headers) headers = {}
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
