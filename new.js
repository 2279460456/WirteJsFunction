function MyNew() {
    let obj = {};   //创建对象
    const func = [].shift.call(arguments);  //获取构造函数
    obj.__proto__ = func.prototype;  //链接原型
    const result = func.apply(obj, Array.from(arguments)); //执行构造函数，并让构造函数中的this指向obj，并传递参数
    return typeof result === 'object' ? result : obj;

}

function Create(a, b) {
    // console.log(arr)
    this.a = a
    this.b = b

}
let obj = MyNew(Create, 1, 2);

console.log(obj)