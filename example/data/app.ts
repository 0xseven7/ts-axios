import axios from '../../src'
axios({
  method: "post",
  url: '/data/post',
  data: {
    a: 1,
    b: 2
  }
})
const arr = new Int32Array([21, 31])
axios({
  method: "post",
  url: '/data/buffer',
  data: arr
})

