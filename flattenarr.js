//数组扁平化1
// const arr1 = [1, [3, [6, [1, 56, 7345, 23]]], 12];


function flattenarr(arr) {
    let result = [];
    for (let key in arr) {
        if (arr.hasOwnProperty(key)) {
            if (Array.isArray(arr[key])) {
                result = result.concat(flattenarr(arr[key]))
            }
            else {
                result.push(arr[key]);
            }
        }
    }
    return result;
}

// flattenarr(arr1).map(item => {
//     console.log(item);
// });





// 数组扁平化2
// const arr1 = [1, [3, [6, [1, 56, 7345, 23]]], 12];

function flattenarr(arr) {
    let result = [];
    arr.reduce((pre, value) => {
        return Array.isArray(value) ? result = result.concat(flattenarr(value)) : result.push(value);
    }, result)
    return result;
}


// flattenarr(arr1).map(item => {
//     console.log(item);
// });





//数组扁平化3(调用数组的flat（Infinity）)

// const arr1 = [1, [3, [6, [1, 56, 7345, 23]]], 12];

// function flattenarr(arr) {
//     return arr.flat(Infinity);
// }


// flattenarr(arr1).map(item => {
//     console.log(item);
// });



// Function.prototype.mycall = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error('type error')
//     }
//     let self = this;
//     let fn = Symbol('fn');
//     context[fn] = self;
//     let result = context[fn](...args);
//     delete context[fn];
//     return result;
// }


// Function.prototype.myapply = function (context, ...args) {
//     if (typeof this !== "function") {
//         throw new Error('type error')
//     }
//     let self = this;
//     let fn = Symbol('fn');
//     context[fn] = self;

//     let result = context[fn](args)
//     delete context[fn];
//     return result;
// }

// Function.prototype.mybind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error("type error")
//     }
//     let self = this
//     return function F() {
//         if (this instanceof F) {
//             return new self([...args, ...arguments])
//         }
//         return self.apply(context,[...args, ...arguments]);
//     }
// }


