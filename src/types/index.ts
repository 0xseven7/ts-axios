type TMethods =
  | 'get'
  | 'GET'
  | 'POST'
  | 'post'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'HEAD'

export interface IAxiosConfig {
  url: string
  method: TMethods
  data?: any
  params?: any
}
