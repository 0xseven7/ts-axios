import axios from '../../src'

axios.interceptors.request.use((config) => {
  config.data.c = 5
  return config
})
// axios({
//   url: '/interceptor/get',
//   method: 'get'
// })
axios({
  url: '/interceptor/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
})
