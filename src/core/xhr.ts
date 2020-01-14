import { IAxiosConfig } from '../types'

export default function xhr(config: IAxiosConfig) {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.onreadystatechange = function(req) {
    if (request.readyState !== 4) {
      return
    }
    const responseHeaders = request.getAllResponseHeaders()
  }
  // 处理header
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  console.log(data)
  request.send(data)
}
