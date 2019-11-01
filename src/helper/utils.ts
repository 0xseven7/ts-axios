const toString = Object.prototype.toString

export const isDate = (value: any): boolean => {
  return toString.call(value) === '[object Date]'
}
export const isObj = (value: any): boolean =>
  toString.call(value) === '[object Object]'
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
