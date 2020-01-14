import axios from '../../src/core'
axios({
  method: 'get',
  url: 'simple/get',
  params: {
    a: 1,
    b: 2
  }
})
