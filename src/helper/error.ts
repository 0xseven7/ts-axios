import { IAxiosResponse, IAxiosRequestConfig, IAxiosError } from '../types'

export class AxiosError extends Error {
  config: IAxiosRequestConfig
  isAxiosError: boolean
  code?: string | null
  request?: any
  response?: IAxiosResponse

  constructor(
    message: string,
    config: IAxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: IAxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: IAxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: IAxiosResponse
): IAxiosError {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
