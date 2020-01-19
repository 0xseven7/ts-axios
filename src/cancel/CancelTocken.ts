import {
  ICancel,
  ICanceler,
  ICancelExcutor,
  ICancelToken,
  ICancelTokenSource
} from '../types'
import Cancel from './Cancel'

interface IResolvePromise {
  (reason?: ICancel): void
}

export default class CancelToken implements ICancelToken {
  promise: Promise<ICancel>
  reason?: ICancel

  constructor(executor: ICancelExcutor) {
    let resolvePromise: IResolvePromise
    this.promise = new Promise<ICancel>(resolve => {
      resolvePromise = resolve
    })
    executor(message => {
      if (this.reason) {
        return
      }
      this.reason = new Cancel(message)
      resolvePromise(this.reason)
    })
  }

  throwIfRequested(): void {
    if (this.reason) {
      throw this.reason
    }
  }

  static source(): ICancelTokenSource {
    let cancel!: ICanceler
    const token = new CancelToken(c => {
      cancel = c
    })
    return {
      cancel,
      token
    }
  }
}
