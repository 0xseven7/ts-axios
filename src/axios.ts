import Axios from './core/Axios'
import { IAxiosInstance, IAxiosRequestConfig, IAxiosStatic } from './types'
import { extend } from './helper/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import Cancel, { isCancel } from './cancel/Cancel'
import CancelToken from './cancel/CancelTocken'

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
axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel
export default axios
