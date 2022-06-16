'use strict';

const arr = [1, 22, 13, 16, 48,];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.pop();
arr.push(10);


arr[99] = 0;
console.log(arr.length);

 arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

 for (let i = 0; i < arr.length; i++) { // для перебора элементов массива
     console.log(arr[i]);
    }

 for (let value of arr) { // также перебирает элементы массива
      console.log(value);
  }

const str = prompt("", "");
const product = str.split(', ');
product.sort();
console.log(product.join('; '));
