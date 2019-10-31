import { IAxiosRequestConfig, IAxiosPromise } from './types'
import xhr from './xhr'
import { bindUrl } from './helper/url'
import { transformRequest } from './helper/data'
import { processHeaders } from './helper/headers'
import { IAxiosResponse } from './types/index'

export default function axios(config: IAxiosRequestConfig): IAxiosPromise {
  processConfig(config)
  return xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeader(config)
  config.data = transformRequestData(config)
}
function transformUrl(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
function transformRequestData(config: IAxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformHeader(config: IAxiosRequestConfig) {
  const { data, headers = {} } = config
  return processHeaders(headers, data)
}
