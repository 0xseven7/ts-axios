import { IAxiosRequestConfig, IAxiosPromise } from './types'
import { IAxiosResponse } from './types/index'
export default function xhr(config: IAxiosRequestConfig): IAxiosPromise {
  return new Promise(resolve => {
    const {
      data = null,
      url,
      method = 'get',
      headers = {},
      responseType
    } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    request.open(method.toLocaleLowerCase(), url, true)
    Object.keys(headers).forEach(name => {
      console.log(name)
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = request.getAllResponseHeaders()
      const responseData =
        responseType && responseType !== 'text'
          ? request.response
          : request.responseText
      const response: IAxiosResponse = {
        data: responseData,
        headers: responseHeaders,
        config,
        request,
        status: request.status,
        statusText: request.statusText
      }
      resolve(response)
    }
    request.send(data)
  })
}
