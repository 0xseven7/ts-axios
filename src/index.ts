import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import {buildUrl} from './helpers/url'
function processConfig (config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}
function transformUrl(config: AxiosRequestConfig) {
  const {url, params} = config
  return buildUrl(url, params)
}
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
