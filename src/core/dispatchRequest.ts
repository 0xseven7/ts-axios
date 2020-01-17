import { IAxiosPromise, IAxiosRequestConfig } from '../types'
import { bindUrl } from '../helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
import { transformData } from '../helper/data'
import { flattenHeaders, processHeaders } from '../helper/headers'
function dispatchRequest(config: IAxiosRequestConfig): IAxiosPromise {
  processConfig(config)
  return xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transFormUrl(config)
  config.headers = transformReuestHeaders(config)
  config.data = transformRequestData(config)
  // 去除headers中的冗余属性
  config.headers = flattenHeaders(config.headers, config.method!)
}
function transFormUrl(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return bindUrl(url as string, params)
}
function transformReuestHeaders(config: IAxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformRequestData(config: IAxiosRequestConfig) {
  return transformData(config.data)
}
export default dispatchRequest
