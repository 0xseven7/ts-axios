import axios from '../../src/axios';
axios({
  url: '/error/timeout',
  timeout: 1000,
  method: 'get'
}).then(res => {

}).catch(e => {
  console.log(e)
})
axios({
  url: '/error/internal',
  method: 'get'
}).then(res => {
  
}).catch(e => {
  console.log(e)
})
axios({
  url: '/error/404',
  method: 'get'
}).then(res => {
  
}).catch(e => {
  console.log(e)
})