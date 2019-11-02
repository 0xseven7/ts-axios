import { IAxiosRequestConfig } from './types'
import { processHeaders } from './helper/headers'
import { transformRequest, transformResponse } from './helper/data'

const defaults: IAxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json;, text/plain, */*'
    }
  },
  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    }
  ],
  transformResponse: [
    function(data: any): any {
      return transformResponse(data)
    }
  ]
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
