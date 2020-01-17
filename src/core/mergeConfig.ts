import { IAxiosRequestConfig } from '../types'
import { type } from 'os'
import { deepMerge, isPlainObj } from '../helper/util'

export default function mergeConfig(
  config1: IAxiosRequestConfig,
  config2: IAxiosRequestConfig
): IAxiosRequestConfig {
  if (!config2) {
    return config1
  }
  const config = Object.create(null)
  // 合并所有config2中的属性
  for (let key in config2) {
    mergeFiled(key)
  }
  // 合并默认配置中有的, 自定义中没有的
  for (let key in config1) {
    if (!config2[key]) {
      mergeFiled(key)
    }
  }

  function mergeFiled(key: string): void {
    const strats: any = {}
    function defaultStrat(val1: any, val2: any) {
      return typeof val2 !== 'undefined' ? val2 : val1
    }

    function fromVal2Strat(val1: any, val2: any): any {
      if (typeof val2 !== 'undefined') {
        return val2
      }
    }

    function deepMergeStrat(val1: any, val2: any): any {
      if (isPlainObj(val2)) {
        // val2 是复杂对象
        return deepMerge(val1, val2)
      } else if (typeof val2 !== 'undefined') {
        // val2 不是复杂对象且不是空值
        return val2
      } else if (isPlainObj(val1)) {
        // val2 空 val1复杂
        return deepMerge(val1)
      } else if (typeof val1 !== 'undefined') {
        // val2 空 val不是复杂对象也不为空
        return val1
      }
    }
    const stratKeysFromVal2 = ['url', 'params', 'data']
    stratKeysFromVal2.forEach(key => {
      strats[key] = fromVal2Strat
    })
    const stratKeysDeepMerge = ['headers']
    stratKeysDeepMerge.forEach(key => {
      strats[key] = deepMergeStrat
    })
    const strat = strats[key] || defaultStrat
    config[key] = strat(config1[key], config2![key])
  }

  return config
}
