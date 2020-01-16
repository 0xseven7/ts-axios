import InterceptorManager from '../core/InterceptorManager'

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
