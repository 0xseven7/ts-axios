import { deepMerge, isObj } from './utils'
import { Method } from '../types'

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
      console.log(normalizedName, 'normalizedNamenormalizedNamenormalizedName')
      headers[normalizedName] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common || {}, headers[method] || {}, headers)
  const methodsToDelete = [
    'delete',
    'get',
    'head',
    'options',
    'post',
    'put',
    'patch',
    'common'
  ]
  methodsToDelete.forEach(method => {
    delete headers[method]
  })
  return headers
}

export function parserHeaders(headers: string): any {
  let parsed: any = {}
  if (!headers) {
    return
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
