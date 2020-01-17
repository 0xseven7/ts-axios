// import DummyClass from '../src/ts-axios'
//
// /**
//  * Dummy test
//  */
// describe('Dummy test', () => {
//   it('works if true is truthy', () => {
//     expect(true).toBeTruthy()
//   })
//
//   it('DummyClass is instantiable', () => {
//     expect(new DummyClass()).toBeInstanceOf(DummyClass)
//   })
// })
function desc(...a: any[]) {
  console.log(arguments)
  console.log(a)
}
desc(1, 2)
