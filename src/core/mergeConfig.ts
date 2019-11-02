import { IAxiosRequestConfig } from '../types'
import { isObj, deepMerge } from '../helper/utils'

export default function mergeConfig(
  config1: IAxiosRequestConfig,
  config2: IAxiosRequestConfig
): IAxiosRequestConfig {
  if (!config2) {
    config2 = {}
  }
  const config = Object.create(null)
  console.log(config2)

  let strats: any = {}
  const stratKeyFromVal2 = ['url', 'params', 'data']
  const stratKeyDeepMerge = ['headers']
  stratKeyFromVal2.forEach(key => {
    strats[key] = fromVal2Strat
  })
  stratKeyDeepMerge.forEach(key => {
    strats[key] = deepMergeStrat
  })
  for (let key in config2) {
    mergeField(key)
  }
  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat
    config[key] = strat(config1[key], config2[key]!)
  }

  function defaultStrat(val1: any, val2: any): any {
    console.log(val2)
    return typeof val2 !== 'undefined' ? val2 : val1
  }

  function fromVal2Strat(val1: any, val2: any): any {
    if (typeof val2 !== 'undefined') {
      return val2
    }
  }

  function deepMergeStrat(val1: any, val2: any): any {
    console.log(val1, val2)
    if (isObj(val2)) {
      return deepMerge(val1, val2)
    } else if (typeof val2 !== 'undefined') {
      return val2
    } else if (isObj(val1)) {
      return deepMerge(val1)
    } else if (typeof val1 !== 'undefined') {
      return val1
    }
  }

  return config
}
