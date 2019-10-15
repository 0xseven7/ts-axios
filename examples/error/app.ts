import axios from '../../src'
axios({
  method: 'get',
  url: '/error/get1',
}).then((res) => {
  console.log(res);
}).catch(e => {
  console.log(e)
})
axios({
  method: 'get',
  url: '/error/get',
}).then((res) => {
  console.log(res21);
}).catch(e => {
  console.log(e)
})

