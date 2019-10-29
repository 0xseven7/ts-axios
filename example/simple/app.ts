import axios from '../../src'
// /simple/get?a=1&b=2
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
// /simple/get?foo[]=1&foo[]=2
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: [1, 2]
  }
})
// date
let date = new Date()
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    date
  }
})
// 特殊符号
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    foo: '&$:'
  }
})
axios({
  method: 'get',
  url: '/simple/get?foo=bar',
  params: {
    a: ['c', 'd']
  }
})
