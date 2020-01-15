import axios from '../../src'
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

// const arr = new Int32Array([21, 31])
// console.log(arr);
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

