"use strict";

const num = 266219;

const n = num.toString().split('');
console.log(n);

const mult = n.reduce(function(total, amount){
    return total * amount;
});
console.log(mult);

const cube = mult ** 3;
console.log('Полученное число в кубе:' + ' ' + cube);

console.log(String(cube).substr(0, 2));