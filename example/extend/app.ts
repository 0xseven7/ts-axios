import axios,  {IAxiosError} from '../../src'
axios.get('/extend/get').then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})
axios.post('/extend/post', {a: 1, b: 2}).then(res => {
  console.log(res);
}).catch((e: IAxiosError) => {console.log(e);})
