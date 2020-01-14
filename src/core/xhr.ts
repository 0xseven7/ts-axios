import { IAxiosRequestConfig, IAxiosResponse } from '../types'
import { parserHeaders } from '../helper/headers'
import { parserResponseData } from '../helper/data'

export default function xhr(
  config: IAxiosRequestConfig
): Promise<IAxiosResponse> {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)
    request.onreadystatechange = function(req) {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = request.getAllResponseHeaders()
      const responseData =
        responseType && responseType !== 'text'
          ? request.response
          : request.responseText
      const response: IAxiosResponse = {
        data: parserResponseData(responseData),
        // data: responseData,
        headers: parserHeaders(responseHeaders),
        statusText: request.statusText,
        status: request.status,
        config,
        request
      }
      resolve(response)
    }
    // 处理header
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
  })
}
