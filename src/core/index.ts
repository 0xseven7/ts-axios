import { IAxiosConfig } from '../types'
import { bindUrl } from '../helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
import { transformData } from '../helper/data'
import { processHeaders } from '../helper/headers'
function axios(config: IAxiosConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosConfig): void {
  config.url = transFormUrl(config)
  config.headers = transformReuestHeaders(config)
  config.data = transformRequestData(config)
}
function transFormUrl(config: IAxiosConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
function transformRequestData(config: IAxiosConfig) {
  return transformData(config.data)
}
function transformReuestHeaders(config: IAxiosConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
