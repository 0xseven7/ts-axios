import { IAxiosRequestConfig } from './types'
export default function xhr(config: IAxiosRequestConfig) {
  const { data = null, url, method = 'get', header } = config
  const request = new XMLHttpRequest()
  request.open(method.toLocaleLowerCase(), url, true)
  request.send(data)
}
