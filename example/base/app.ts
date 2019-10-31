import axios from '../../src/axios'
axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  },
  responseType: 'json'
}).then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})
