import axios from '../../src/'
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: [
//       'bar', 'baz'
//     ]
//   }
// })
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }})
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     },
//     anamails: ['cat', 'dog'],
//     date: new Date(),
//     void: null
//   }})
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json'
  },
  data: {
    a: 'aaaa',
    b: 'bbbb'
  },
  responseType: 'json'
}).then(res => {
  console.log(res);
})
// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

//
