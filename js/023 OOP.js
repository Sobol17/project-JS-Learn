'use strict';

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = { // прототип, который описывает всех солдат
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = Object.create(soldier);

// const john = { // конкретный рядовой
//     health: 100
// };

//УСТАРЕВШИЙ ФОРМАТ!!!

//john.__proto__ = soldier;

//современный формат

Object.setPrototypeOf(john, soldier);

console.log(john.armor); // выводит свойство Armor, которое наследовалось от прототипа soldier
john.sayHello();