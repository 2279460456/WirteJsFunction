function Promise_all(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("传入的不是数组!")
    }
    let count = 0;
    let r_arr = [];
    return new Promise((res, rej) => {
        arr.forEach((item, index) => {
            Promise.resolve(item).then((value) => {
                count++;
                // console.log(count);
                r_arr[index] = value;
                if (count === arr.length) {
                    res(r_arr);
                }
            }
            ).catch(err => rej(err));
        })
    })
}


let p1 = Promise.resolve("123312");
let p2 = Promise.resolve("2");
let p3 = Promise.resolve("3");
let p4 = Promise.resolve("4");

let push_arr = [p1, p2, p3, p4];

Promise_all(push_arr).then(value => console.log(value)).catch(e => console.log(e))