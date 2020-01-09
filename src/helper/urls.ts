import {isPlainObj, isDate} from './util'
function encode(val: string): string {
  return  encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/g, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
export function bindUrl(url: string, params?:any): string {
  if (!params) {
    return url
  }
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    let val = params[key]
    if (val === null && typeof val === 'undefined') {
      return
    }
    // params = {
    //   a: [1, 2],
    //   b: {
    //     c: 1,
    //     d: 5
    //   }
    // }
    // ?a[]=1&a[]=2&b={c:1,d:2}
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(value => {
      if (isDate(value)) {
        value = value.toISOString()
      } else if (isPlainObj(value)) {
        value = JSON.stringify(value)
      }
      parts.push(`${encode(key)}=${encode(value)}`)
    })

    let serializeParams = parts.join('&')
    console.log(serializeParams);
    if (serializeParams) {
      const markIndex = url.indexOf('#')
      if (markIndex !== -1) {
        url.slice(0, markIndex)
      }
      url = `${url}${url.indexOf('?') === -1 ? '?' : '' }${serializeParams}`
      console.log(url);
    }
  })
  return url
}
