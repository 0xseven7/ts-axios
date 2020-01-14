import { IAxiosPromise, IAxiosRequestConfig } from '../types'
import { bindUrl } from '../helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
import { transformData } from '../helper/data'
import { processHeaders } from '../helper/headers'
function axios(config: IAxiosRequestConfig): IAxiosPromise {
  processConfig(config)
  return xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transFormUrl(config)
  config.headers = transformReuestHeaders(config)
  config.data = transformRequestData(config)
}
function transFormUrl(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
function transformRequestData(config: IAxiosRequestConfig) {
  return transformData(config.data)
}
function transformReuestHeaders(config: IAxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
