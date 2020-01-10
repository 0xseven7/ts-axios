import { IAxiosConfig } from '../types'
import { bindUrl } from '../helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
import { transformData } from '../helper/data'
function axios(config: IAxiosConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosConfig): void {
  config.url = transFormUrl(config)
  config.data = transformData(config)
}
function transFormUrl(config: IAxiosConfig): string {
  const { url, params } = config
  return bindUrl(url, params)
}
function transformRequestData(config: IAxiosConfig) {
  return transformData(config.data)
}
export default axios
