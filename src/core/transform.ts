import { IAxiosTransformer } from '../types'

export default function transform(
  data: any,
  headers: any,
  fns?: IAxiosTransformer | IAxiosTransformer[]
): any {
  if (!fns) {
    return data
  }
  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach(fn => {
    data = fn(data, headers)
  })
  return data
}
