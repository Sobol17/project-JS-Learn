'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
// [1] - индекс элемента в данном псевдомассиве, с помощью использования индексов, можно обращаться к конкретным элементам в псевдомассиве.

console.log(btns);

const circles = document.getElementsByClassName('circle');

console.log(circles);

// современные методы
// обращение по CSS селектору
const hearts = document.querySelectorAll('.heart');

//выводим каждый элемент псевдомассива hearts в консоль с помощью forEach

hearts.forEach(item => {
    console.log(item);
});

// позволяет получить только один элемент под этим селектором (самый первый)

const oneHeart = document.querySelector('.heart');

console.log(oneHeart);