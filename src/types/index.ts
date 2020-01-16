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

export interface IAxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: IAxiosRequestConfig
  request: any
}

export interface IAxiosPromise extends Promise<IAxiosResponse> {}

export interface IAxiosError extends Error {
  config: IAxiosRequestConfig
  code?: string | null
  request?: any
  response?: IAxiosResponse
  isAxiosError: boolean
}

export interface IAxios {
  request(config: IAxiosRequestConfig): Promise<IAxiosResponse>

  get(url: string, config?: IAxiosRequestConfig): Promise<IAxiosResponse>

  delete(url: string, config?: IAxiosRequestConfig): Promise<IAxiosResponse>

  head(url: string, config?: IAxiosRequestConfig): Promise<IAxiosResponse>

  options(url: string, config?: IAxiosRequestConfig): Promise<IAxiosResponse>

  post(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): Promise<IAxiosResponse>

  put(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): Promise<IAxiosResponse>

  patch(
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): Promise<IAxiosResponse>
}

export interface IAxiosInstance extends IAxios {
  (config: IAxiosRequestConfig): Promise<IAxiosResponse>
  (url: string, config?: IAxiosRequestConfig): IAxiosPromise
}
