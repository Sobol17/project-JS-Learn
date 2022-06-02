"use strict";



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else { 
//     console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('VERNO!');
        break;
    default:
        console.log('не в этот раз(');
        break;
}