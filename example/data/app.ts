import axios from '../../src'
axios({
  method: "get",
  url: '/data/post',
  data: {
    a: 1,
    b: 2
  }
})
