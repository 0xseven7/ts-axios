import { IAxiosRequestConfig } from './types'
import xhr from './xhr'
import { bindUrl } from './helper/url'
export default function axios(config: IAxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transformUrl(config)
}
function transformUrl(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
