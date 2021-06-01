"use strict";

const func = function(argument) {
  if (typeof argument !== 'string') {
    return('Это не строка!!!');
  }
  argument = argument.trim(); 
  if (argument.length > 30) {
    return argument.slice(0, 30) + '...';
  }
  else {
    return argument;
  }
}; 

console.log(func(3453535));
console.log(func('    Обычная строка    '));
console.log(func('    Очень очень очень очень очень очень очень очень длинная строка'));