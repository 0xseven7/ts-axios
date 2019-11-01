import axios, { IAxiosError } from '../../src'

interface IResponseData<T = any> {
  code: number,
  result: T,
  message: string
}

interface IUser {
  name: string,
  age: number
}

// axios.get('/extend/get').then(res => {
//   console.log(res);
// }).catch(e => {
//   console.log(e);
// })
// axios.post('/extend/post', { a: 1, b: 2 }).then(res => {
//   console.log(res)
// }).catch((e: IAxiosError) => {
//   console.log(e)
// })
// axios('/extend/post', {
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// }).then(res => {
//   console.log(res.data)
// }).catch(e => {
//   console.log(e)
// })

function getUser<T>() {
  return axios<IResponseData<T>>('/extend/user').then(res => res.data).catch(error => console.log(error))
}

async function test() {
  const user = await getUser<IUser>()
  if (user) {
    console.log(user.result.name)
  }
}
test()
