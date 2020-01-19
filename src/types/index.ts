import InterceptorManager from '../core/InterceptorManager'
import exp from 'constants'

export type TMethods =
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
  | 'PATCH'
  | 'patch'

export interface IAxiosRequestConfig {
  url?: string
  method?: TMethods
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
  transformRequest?: IAxiosTransformer | IAxiosTransformer[]
  transformResponse?: IAxiosTransformer | IAxiosTransformer[]
  cancelToken?: ICancelToken

  [propName: string]: any
}

export interface ICancelToken {
  promise: Promise<ICancel>
  reason?: ICancel

  throwIfRequested(): void
}

export interface ICanceler {
  (message?: string): void
}

export interface ICancelExcutor {
  (cancel: ICanceler): void
}

export interface IAxiosTransformer {
  (data: any, headers?: any): any
}

export interface IAxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: IAxiosRequestConfig
  request: any
}

export interface IAxiosPromise<T = any> extends Promise<IAxiosResponse<T>> {}

export interface IAxiosError extends Error {
  config: IAxiosRequestConfig
  code?: string | null
  request?: any
  response?: IAxiosResponse
  isAxiosError: boolean
}

export interface Interceptors {
  request: InterceptorManager<IAxiosRequestConfig>
  reponse: InterceptorManager<IAxiosResponse>
}

export interface IAxios {
  interceptors: Interceptors
  defaults: IAxiosRequestConfig

  request<T = any>(config: IAxiosRequestConfig): IAxiosPromise<T>

  get<T = any>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>

  delete<T = any>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>

  head<T = any>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>

  options<T = any>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>

  post<T = any>(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): IAxiosPromise<T>

  put<T = any>(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): IAxiosPromise<T>

  patch<T = any>(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): IAxiosPromise<T>
}

export interface IAxiosInstance extends IAxios {
  <T = any>(config: IAxiosRequestConfig): IAxiosPromise<T>

  <T = any>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>
}

export interface IAxiosInterceptorManager<T> {
  use(resolved: IResolvedFn<T>, rejected?: IRejectedFn): number

  eject(id: number): void
}

export interface IResolvedFn<T = any> {
  (val: T): T | Promise<T>
}

export interface IRejectedFn {
  (error: any): any
}

export interface IAxiosStatic extends IAxiosInstance {
  create(config?: IAxiosRequestConfig): IAxiosStatic

  CancelToken: ICancelTokenStatic
  Cancel: ICancelStatic
  isCancel: (value: any) => boolean
}

export interface ICancelTokenSource {
  token: ICancelToken
  cancel: ICanceler
}

export interface ICancelTokenStatic {
  new (excutor: ICancelExcutor): ICancelToken

  source(): ICancelTokenSource
}

export interface ICancel {
  message?: string
}

export interface ICancelStatic {
  new (message?: string): ICancel
}

export interface AxiosS {}
