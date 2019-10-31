import { isObj } from './utils'
function normalizedHeaders(headers: any, normalizedName: string) {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (
      name !== normalizedName &&
      name.toUpperCase() === normalizedName.toUpperCase()
    ) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers: any, data: any): any {
  const normalizedName = 'Content-Type'
  normalizedHeaders(headers, normalizedName)
  if (isObj(data)) {
    if (headers && !headers[normalizedName]) {
      headers[normalizedName] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
