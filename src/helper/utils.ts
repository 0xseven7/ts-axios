const toString = Object.prototype.toString

export const isDate = (value: any): boolean => {
  return toString.call(value) === '[object Date]'
}
export const isObj = (value: any): boolean =>
  toString.call(value) === '[object Object]'
