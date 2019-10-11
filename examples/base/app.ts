import axios from '../../src/'
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: [
      'bar', 'baz'
    ]
  }
})
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    }
  }})
axios({
  method: 'get',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    },
    anamails: ['cat', 'dog'],
    date: new Date(),
    void: null
  }})

