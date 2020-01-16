import axios from '../../src'
import { get } from 'http'

console.log(axios)
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res.data)
}).catch(e => {
  console.log(e)
})
axios.post('/base/post', {
  a: 1,
  b: 2
}).then(res => {
  console.log(res.data)
}).catch(e => {
  console.log(e)
})
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res)
})
axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res)
})
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res)
})

interface IResponseData<T = any> {
  code: number,
  result: T,
  message: string
}

interface User {
  name: string,
  age: number
}

function getUse<T>() {
  return axios.get<IResponseData<T>>('/user/get')
    .then(res => res.data)
    .catch(e => console.error(e))
}

async function test() {
  try {
    let res = await getUse<User>()
    if (res) {
      console.log(res.result.name)
    }
  } catch (e) {
    console.log(e);
  }
}

test()


// const arr = new Int32Array([21, 31])
// console.log(arr);
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

