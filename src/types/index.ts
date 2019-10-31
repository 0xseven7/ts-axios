export interface IAxiosRequestConfig {
  url: string
  method: Method
  timeout?: number
  headers?: any
  data?: any
  params?: any
  responseType?: XMLHttpRequestResponseType
}
export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
export interface IAxiosResponse {
  data: any
  config: IAxiosRequestConfig
  status: number
  statusText: string
  request: any
  headers: any
}
export interface IAxiosPromise extends Promise<IAxiosResponse> {}
export interface IAxiosError {
  message: string
  config: IAxiosRequestConfig
  code?: string
  request?: any
  response?: IAxiosResponse
  isAxiosError: boolean
}
