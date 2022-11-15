// let obj = { a: 5, d: { b: 2, c: 3 } }
let obj = [1, [213, 312, [312, 332]]];


function deepCopy(obj) {
    let newobj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {         //for in 会遍历原型，所以要判断是不是自己的元素
            if (typeof obj[key] === 'object') {
                newobj[key] = deepCopy(obj[key])
            } else {
                newobj[key] = obj[key];
            }
        }
    }
    return newobj;
}


// function deepCopy(obj) {
//     let newobj = Object.prototype.toString.call(obj) === 'Object' ? {} : [];
//     for (let key in obj) {
//         if (typeof obj[key] === 'object') {
//             newobj[key] = deepCopy(obj[key]);
//         } else {
//             newobj[key] = obj[key];
//         }
//     }
//     return newobj;
// }




for (let key in deepCopy(obj)) {
    console.log(deepCopy(obj)[key]);
}

