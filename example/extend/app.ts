import axios from '../../src'
import { get } from 'http'
console.log(axios);
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  },
}).then(res => {
  console.log(res.data);
}).catch(e => {
  console.log(e);
})
axios.post('/base/post', {
  a: 1,
  b: 2
}).then(res => {
  console.log(res.data);
}).catch(e => {
  console.log(e);
})
axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res);
})
axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res);
})
axios( {
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
}).then((res) => {
  console.log(res);
})



// const arr = new Int32Array([21, 31])
// console.log(arr);
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

