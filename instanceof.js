function fun_instanceof(data, target) {
    if (!['function', 'object'].includes(typeof data) || data === null) {
        return false;
    }
    let proto = data.__proto__;
    let prototype = target.prototype;
    while (proto !== prototype) {
        proto = proto.__proto__;
        if (proto === null) {
            return false;
        }
    }
    return true;
}


let obj = {};
let str = 'adad';
let str1 = new String('adad');


console.log(fun_instanceof(str1, String))


