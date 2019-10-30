import { isObj, isDate } from './utils'
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3a/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2c/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5b/gi, '[')
    .replace(/%5d/gi, ']')
}
export function bindUrl(url: string, params?: any) {
  if (!params) {
    return url
  }
  const part: string[] = []
  Object.keys(params).forEach(key => {
    let val = params[key]
    // null 或者空
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObj(val)) {
        val = JSON.stringify(val)
      }
      part.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = part.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  console.log(url)
  return url
}
