'use strict';

const persone = 'Alex';

const bool = true;

//console.log(some);  null такой переменной нет

let und;

console.log(und); // выведет undefined, переменная есть, но значения в ней нет

const obj = {
    name: 'John',
    age: 25,
    isMarired: false,
    luck: 777
};

console.log(obj.luck);   //лучше использовать обращение через точку
console.log(obj ['name']);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp'];
console.log(arr[2]);


