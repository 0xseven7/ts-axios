import axios, { IAxiosError } from '../../src/core'

axios({
  method: 'get',
  url: '/error/get',
  data: {
    a: 1,
    b: 2
  },
  timeout: 2000
}).then(res => {
  console.log(res.data)
}).catch((e: IAxiosError) => {
  console.log(e.message)
  console.log(e.code)
})
// const arr = new Int32Array([21, 31])
// console.log(arr);
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

