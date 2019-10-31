import { IAxiosRequestConfig } from './types'
export default function xhr(config: IAxiosRequestConfig) {
  const { data = null, url, method = 'get', headers = {} } = config
  const request = new XMLHttpRequest()
  request.open(method.toLocaleLowerCase(), url, true)
  Object.keys(headers).forEach(name => {
    console.log(name)
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
