import axios from '../../src/core'
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
const arr = new Int32Array([21, 31])
console.log(arr);
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
