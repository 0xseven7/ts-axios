import { IAxiosRequestConfig } from './types'

const defaults: IAxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json;, text/plain, */*'
    }
  }
}
const methodNoDta = ['delete', 'get', 'options', 'head']
methodNoDta.forEach(method => {
  defaults.headers[method] = {}
})
const methodsWithData = ['post', 'put', 'patch']
methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencode'
  }
})

export default defaults
