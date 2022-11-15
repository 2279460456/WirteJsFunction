let obj = { f: 1 }

Function.prototype.mycall = function (obj, ...args) {
    let self = this
    if (typeof self !== 'function') {
        throw new Error('类型错误')
    }
    let fn = Symbol("fn");
    obj[fn] = self;
    let result = obj[fn](...args);
    delete obj[fn]
    return result;
}


Function.prototype.myapply = function (obj, args) {
    let self = this;
    if (typeof self !== 'function') {
        throw new Error('类型错误');
    }
    let fn = Symbol('fn');
    obj[fn] = self;
    let result = obj[fn](...args);
    delete obj[fn]
    return result;
}

Function.prototype.mybind = function (target, ...args) {
    let self = this;
    if (typeof self !== 'function') {
        throw new Error('类型错误');
    }
    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        self.apply(target, [...args, ...arguments]);
    }
}

function fun1(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}


// console.log(obj)