import {IAxiosConfig} from './types'
import {bindUrl} from './helper/urls'
import xhr from './xhr'
import { config } from 'shelljs'
function axios(config: IAxiosConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosConfig): void {
  config.url = transFormUrl(config)
}
function transFormUrl(config: IAxiosConfig): string {
  const {url, params} =  config
  return bindUrl(url, params)
}
export default  axios
