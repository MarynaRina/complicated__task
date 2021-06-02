"use strict";

let arr = ['23423', '97845', '32346', '54357', '46896', '64783', '134511'];

//  1.
for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

//  2. 
const num = function(elem) {
    let arr = [];
    if (elem !== 1) {
        arr.push(1);
        for (let n = 2; n * n <= elem; n++) {
            if (elem % n === 0) {
                arr.push(n);
            }
        }
    }
    arr.push(elem);
    return arr;
};

for (let i = 2; i <= 100; i++) {
    const n = num(i);
    if (n.length <= 2) {
        console.log(`${i}: Делители этого числа: ${num(i).join(', ')}`);
    }
}

