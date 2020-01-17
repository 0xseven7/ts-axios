import { deepMerge, isPlainObj } from './util'
import { TMethods } from '../types'
import { head } from 'shelljs'

function normalizedHeaderName(headers: any, normalizedName: string) {
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
  normalizedHeaderName(headers, 'Content-Type')
  if (isPlainObj(data)) {
    if (!headers || !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parserHeaders(headers: string): any {
  let parsered = Object.create(null)
  if (!headers) {
    return parsered
  }
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsered[key] = val
  })
  return parsered
}

export function flattenHeaders(headers: any, method: TMethods): any {
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common || {}, headers[method] || {}, headers)
  const methodsToDelete = [
    'head',
    'delete',
    'post',
    'get',
    'options',
    'put',
    'patch',
    'common'
  ]
  methodsToDelete.forEach(method => {
    delete headers[method]
  })
  return headers
}
