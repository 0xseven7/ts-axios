import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import xhr from './xhr'
import {buildUrl} from './helpers/url'
import { transFormRequest, transFormResponse } from './helpers/data'
import {processHeader} from './helpers/header'
function processConfig (config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = processHeader(config)
  config.data = transformRequestData(config)
}
function transformUrl(config: AxiosRequestConfig) {
  const {url, params} = config
  return buildUrl(url, params)
}
function transformRequestData(config: AxiosRequestConfig) {
  return transFormRequest(config)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transFormResponse(res.data)
  return res
}
function axios(config: AxiosRequestConfig): AxiosPromise {
  console.log(config);
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

export default axios
