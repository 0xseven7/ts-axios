import {
  IAxiosInterceptorManager,
  IAxiosPromise,
  IAxiosRequestConfig,
  IAxiosResponse,
  IRejectedFn,
  IResolvedFn,
  Method
} from '../types'
import dispatchRequest from './dispatchRequest'
import InterceptorManager from './Interceptor'
import initConfig from '../default'
import mergeConfig from './mergeConfig'
interface IInterceptors {
  request: IAxiosInterceptorManager<IAxiosRequestConfig>
  response: IAxiosInterceptorManager<IAxiosResponse>
}

interface IPromiseChain {
  resolved: IResolvedFn | ((config: IAxiosRequestConfig) => IAxiosPromise)
  rejected?: IRejectedFn
}

export default class Axios {
  interceptors: IInterceptors
  defaults: IAxiosRequestConfig
  constructor() {
    this.defaults = initConfig
    this.interceptors = {
      request: new InterceptorManager<IAxiosRequestConfig>(),
      response: new InterceptorManager<IAxiosResponse>()
    }
  }

  request(url: any, config: any): IAxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    config = mergeConfig(this.defaults, config)
    const chain: IPromiseChain[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ]
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor)
    })
    let promise = Promise.resolve(config)
    while (chain.length) {
      const { resolved, rejected } = chain.shift()!
      promise = promise.then(resolved, rejected)
    }

    // return dispatchRequest(config)
    return promise
  }

  get(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  head(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
  }

  options(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  post(url: string, data?: any, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithData('post', url, data, config)
  }

  put(url: string, data?: any, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithData('put', url, data, config)
  }

  patch(url: string, data?: any, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithData('patch', url, data, config)
  }

  _requestMethodWithoutData(
    method: Method,
    url: string,
    config?: IAxiosRequestConfig
  ) {
    return this.request(Object.assign(config || {}, { method, url }))
  }

  _requestMethodWithData(
    method: Method,
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ) {
    c
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }
}
