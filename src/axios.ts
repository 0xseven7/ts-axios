import Axios from './core/Axios'
import { IAxiosInstance } from './types'
import { extend } from './helper/util'
import defaults from './defaults'
function createInstance(): IAxiosInstance {
  const context = new Axios(defaults)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as IAxiosInstance
}

const axios = createInstance()
export default axios
