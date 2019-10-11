const toString = Object.prototype.toString

export function isObj (val: any): val is Object{
  return  val !== null && typeof val === 'object'
}
export  function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

