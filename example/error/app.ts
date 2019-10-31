import axios , {IAxiosError} from '../../src';
axios({
  url: '/error/timeout',
  timeout: 1000,
  method: 'get'
}).then(res => {

}).catch((e: IAxiosError) => {
  console.log(e.code);
})
axios({
  url: '/error/internal',
  method: 'get'
}).then(res => {

}).catch(e => {
  console.log(e.code)
})
// axios({
//   url: '/error/404',
//   method: 'get'
// }).then(res => {
//
// }).catch((e: IAxiosError)=> {
//   console.log(e)
// })
