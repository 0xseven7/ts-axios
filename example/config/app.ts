import axios from '../../src'

// axios({
//   url: '/config/get',
//   headers: {
//     test: '123'
//   }
// }).then(res => {
//   console.log(res)
// }).catch(e => {
//   console.log(e)
// })

axios({
  url: '/config/post',
  method: 'post',
  headers: {
    test: '123'
  },
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
