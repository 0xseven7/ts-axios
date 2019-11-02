import { IAxiosInstance, IAxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helper/utils'
import defaults from './default'
function createInstance(config: IAxiosRequestConfig): IAxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as IAxiosInstance
}
const axios = createInstance(defaults)
export default axios
