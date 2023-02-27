// function fun(obj) {
//     let result = Array.isArray(obj) ? [] : {};
//     for (let i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             if (typeof obj[i] === 'object') {
//                 result[i] = fun(obj[i])
//             } else {
//                 result[i] = obj[i];
//             }
//         }
//     }
//     return result;
// }


// let arr1 = [1, [2, [2, [3]]]]
// function fun(arr) {
//     let result = [];
//     arr.reduce((pre, item) => {
//         return Array.isArray(item) ? result = result.concat(fun(item)) : result.push(item)
//     }, result)
//     return result;
// }

// console.log(fun(arr1))



// function mynew(fn, ...args) {
//     let obj = {};
//     obj.__proto__ = fn.prototype;
//     let result = fn.apply(obj, args);
//     return typeof result === 'object' ? result : obj;
// }


// function throttling(fn, time) {
//     let timer;
//     let context, args;
//     let run = () => {
//         timer = setTimeout(() => {
//             fn.call(context, ...args);
//             clearTimeout(timer);
//         }, time)
//     }
//     return function () {
//         context = this;
//         args = arguments
//         if (!timer) {
//             run();
//         } else {
//             //节流
//             console.log('不要重复点击');
//             //防抖
//             clearTimeout(timer);
//             run();
//         }
//     }
// }


// function myinstanceof(left, right) {
//     if (!['object', 'function'].includes(typeof left) || left === null) {
//         throw new Error('类型错误');
//     }
//     let proto = left.__proto__;
//     let prototype = right.prototype;
//     while (proto !== prototype) {
//         proto = proto.__proto__;
//         if (proto === null) {
//             return false;
//         }
//     }
//     return true;
// }


// function promiseall(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error('类型错误');
//     }
//     let count = 0;
//     let result = [];
//     return new Promise((res, rej) => {
//         arr.map(item => {
//             Promise.resolve(item).then((value) => {
//                 count++;
//                 result.push(value);
//                 if (count == arr.length) {
//                     res(result);
//                 }
//             }
//             ).catch((err) => {
//                 rej(err);
//             })
//         });
//     })
// }


function currying(fn, ...args) {
    let len = fn.length;
    return function (...params) {
        let newparams = [...args, ...params];
        if (newparams.length < len) {
            return currying.call(this, fn, ...newparams)
        }
        fn.call(this, ...newparams)
    }
}