import {
  IAxios,
  IAxiosPromise,
  IAxiosRequestConfig,
  IAxiosResponse,
  IRejectedFn,
  IResolvedFn,
  TMethods,
  Interceptors
} from '../types'
import InterceptorManager from './InterceptorManager'
import dispatchRequest from './dispatchRequest'
import { which } from 'shelljs'
import mergeConfig from './mergeConfig'

interface IPromiseChain {
  resolved: IResolvedFn | ((config: IAxiosRequestConfig) => IAxiosPromise)
  rejected?: IRejectedFn
}

export default class Axios implements IAxios {
  interceptors: Interceptors
  defaults: IAxiosRequestConfig

  constructor(initConfig: IAxiosRequestConfig) {
    this.defaults = initConfig
    this.interceptors = {
      request: new InterceptorManager<IAxiosRequestConfig>(),
      reponse: new InterceptorManager<IAxiosResponse>()
    }
  }

  request(url: any, config?: any): IAxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    config = mergeConfig(this.defaults, config)
    console.log(config)
    const chain: IPromiseChain[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ]
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })
    this.interceptors.reponse.forEach(interceptor => {
      chain.push(interceptor)
    })
    let promise = Promise.resolve(config)
    while (chain.length) {
      // !   断言值肯定存在的
      const { resolved, rejected } = chain.shift()!
      promise = promise.then(resolved, rejected)
    }
    return promise
  }

  private _requestMethodWithoutData(
    method: TMethods,
    url: string,
    config?: IAxiosRequestConfig
  ): IAxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method,
        url
      })
    )
  }

  private _requestMethodWithData(
    method: TMethods,
    url: string,
    data?: any,
    config?: IAxiosRequestConfig
  ): IAxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data
      })
    )
  }

  get(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('get', url, config)
  }

  delete(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('delete', url, config)
  }

  options(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('options', url, config)
  }

  head(url: string, config?: IAxiosRequestConfig): IAxiosPromise {
    return this._requestMethodWithoutData('head', url, config)
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
}
