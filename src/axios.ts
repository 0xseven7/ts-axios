import { IAxiosRequestConfig } from './types'
import xhr from './xhr'
import { bindUrl } from './helper/url'
import { transformRequest } from './helper/data'

export default function axios(config: IAxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transformUrl(config)
  console.log(config.url)
  config.data = transformRequestData(config)
}
function transformUrl(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
function transformRequestData(config: IAxiosRequestConfig): any {
  return transformRequest(config.data)
}
