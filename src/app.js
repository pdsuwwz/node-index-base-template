import Foo from './foo'
async function test() {
    const num = await Promise.resolve(123)
    console.log(num)
}
console.log('-----', Foo.func())
test()
