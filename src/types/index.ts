import Axios from '../core/Axios'

export interface IAxiosRequestConfig {
  url?: string
  method?: Method
  timeout?: number
  headers?: any
  data?: any
  params?: any
  responseType?: XMLHttpRequestResponseType
  [propName: string]: any
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

export interface IAxiosResponse<T = any> {
  data: T
  config: IAxiosRequestConfig
  status: number
  statusText: string
  request: any
  headers: any
}

export interface IAxiosPromise<T = any> extends Promise<IAxiosResponse<T>> {}

export interface IAxiosError {
  message: string
  config: IAxiosRequestConfig
  code?: string
  request?: any
  response?: IAxiosResponse
  isAxiosError: boolean
}

export interface IAxios {
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

  <T>(url: string, config?: IAxiosRequestConfig): IAxiosPromise<T>
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
