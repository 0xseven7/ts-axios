import { IAxiosRequestConfig, IAxiosPromise } from './types'
import { IAxiosResponse } from './types/index'
import { parserHeaders } from './helper/headers'
export default function xhr(config: IAxiosRequestConfig): IAxiosPromise {
  return new Promise((resolve, reject) => {
    const {
      data = null,
      url,
      method = 'get',
      headers = {},
      responseType,
      timeout
    } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
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
    // 处理网络错误
    request.onerror = function handleError() {
      reject(new Error('Network Error'))
    }
    // 处理超时
    request.ontimeout = function() {
      console.log('timeout')
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }
    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }
      const responseHeaders = parserHeaders(request.getAllResponseHeaders())
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
      // resolve(response)
      handleResponse(response)
    }
    function handleResponse(response: IAxiosResponse) {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }
    request.send(data)
  })
}
