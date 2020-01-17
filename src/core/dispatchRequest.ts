import { IAxiosPromise, IAxiosRequestConfig, IAxiosResponse } from '../types'
import { bindUrl } from '../helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
import { transformRequest } from '../helper/data'
import { flattenHeaders, processHeaders } from '../helper/headers'
import transform from './transform'
function dispatchRequest(config: IAxiosRequestConfig): IAxiosPromise {
  processConfig(config)
  return xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transFormUrl(config)
  // config.headers = transformReuestHeaders(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
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
  return transformRequest(config.data)
}
function transformResponseData(res: IAxiosResponse): IAxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}
export default dispatchRequest
