//函数柯里化
// function currying(fn, ...arg) {
//     let len = fn.length;                 // fn需要的参数个数
//     return function (...param) {         // 返回一个函数接收剩余参数
//         let newarg = [...arg, ...param];
//         if (newarg.length < len) {       // 如果已经接收的参数个数还不够，继续返回一个新函数接收剩余参数
//             return currying.call(this, fn, ...newarg);
//         }
//         return fn.apply(this, newarg);   // 参数全部接收完调用原函数
//     }
// }


function add(x, y, z) {
    console.log(x + y + z);
    return x + y + z;
}

currying(add, 1, 3)(7)

function currying(fn, ...args) {
    let len = fn.length;
    return function f(...params) {
        let newparams = [...args, ...params];
        if (newparams.length < len) {
            return currying.call(this, fn, ...newparams)
        }
        return fn.apply(this, newparams);
    }
}