import {IAxiosConfig} from './types'

export default function xhr(config: IAxiosConfig) {
  const {data = null, url, method = 'get'} = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
  request.onreadystatechange = function(req) {
    const state = request.readyState
  }



}
