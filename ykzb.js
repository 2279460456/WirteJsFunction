//第一题
// var obj = {
//     name: 'baidu',
//     arr: ['a', 'b', 'c']
// }

// var obj2 = obj
// var arr = obj.arr

// obj2.arr = ['a', 'b', 'c', 'd']
// obj2.name = 'inke';

// console.log(arr)
// console.log(obj.name)
// console.log(obj === obj2)
// console.log(obj.arr === obj2.arr)
// console.log(obj.arr === arr)



//第二题
// var MAP = {
//     onclick: function () {

//     },
//     curry: function (val) {
//         return function (z) {
//             return val++ + z
//         }
//     }
// }

// var getInfo = function (val) {
//     return MAP[val]
// }
// var fn = getInfo('curry')

// var a = fn(100)

// console.log(a(200))
// console.log(a(300))
// console.log(fn(100)(200))
// console.log(getInfo('curry')(100)(300))




//第三题
// var name = 'oop'
// var Person = function (options) {
//     this.name = options.name
// }

// Person.prototype.name = 'Person'

// Person.prototype.getName = function () {
//     return this.name
// }

// Person.getName = function () {
//     return this.name;
// }

// var p = new Person({ name: 'inke' })

// console.log(p.constructor === Person) // true
// console.log(p instanceof Person) // true
// console.log(p.__proto__ === Person.prototype) // true

// console.log(p.hasOwnProperty('name')) //
// console.log(p.hasOwnProperty('getName')) //

// var getName = p.getName

// console.log(getName === Person.getName) // ?

// console.log(getName()) // ?

// console.log(Person.prototype.getName()) // ?
// console.log(p.getName())   //
// console.log(Person.getName())// ?




//生命周期函数
// useEffect()
// useCallback()
// useMemo()

// compenentWillMount()
// compenentWillUnMount()
// componentShouldUpdate()
// compenentWillUpdate()





//排序
// let arr = [1, 23, 43, 412, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let temp;
//         if (arr[i] > arr[j]) {
//             temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }

// console.log(arr)