import Axios from './core/Axios'
import { IAxiosInstance, IAxiosRequestConfig, IAxiosStatic } from './types'
import { extend } from './helper/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'

function createInstance(config: IAxiosRequestConfig): IAxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as IAxiosStatic
}

const axios = createInstance(defaults)
axios.create = function create(config: IAxiosRequestConfig) {
  return createInstance(mergeConfig(defaults, config))
}
export default axios
