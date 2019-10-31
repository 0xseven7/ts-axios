import { IAxiosRequestConfig, IAxiosPromise } from './types'
import xhr from './xhr'
import { bindUrl } from './helper/url'
import { transformRequest, transformResponse } from './helper/data'
import { processHeaders } from './helper/headers'
import { IAxiosResponse } from './types/index'
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
function transformResponseData(res: IAxiosResponse): IAxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default function axios(config: IAxiosRequestConfig): IAxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
