import { IAxiosRequestConfig } from './types'
import xhr from './xhr'
export default function axios(config: IAxiosRequestConfig) {
  xhr(config)
}
