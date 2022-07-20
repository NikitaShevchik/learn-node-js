// let math = require('./math');
// let res = math.square(3) + math.cube(3);
// console.log(res)

// let common = require('./common');
// // console.log(`Квадрат числа 5 = ${common.square(5)}, Куб числа 6 = ${common.cube(6)}, Средняя сумма чисел 1, 5, 7  =
// // ${common.avg([1, 5, 7])}, Сумма чисел числа 123456789999 = ${common.digitsSum(123456789999)}`)


// //С помощью модуля из предыдущей задачи найдите сумму квадрата и куба числа 3.
// // Импортируйте для этого только необходимые функции.

// let comRes = common.square(3) + common.cube(3);
// console.log(comRes)


// let array = require('./arrays');
// console.log(array.arrNum);
// console.log(array.arrNumTwo);
// function arraySum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum)
// }
// arraySum(array.arrNum)

// // Сделайте модуль, экспортирующий одну функцию.
// let oneF = require('./onefunction');
// console.log(oneF.ye(5))
// console.log(oneF.square(5), oneF.cube(10))
// console.log(oneF.squareTwo(11), oneF.cubeTwo(11))


// let parameter = require('./parameter');
// let data = 'abcde'; // эти данные хотим передать
// let test = parameter(data, 2)
// console.log(test)

// // let _ = require('underscore');
// // let arr = [1, 2, 3, 4, 5]
// // let resUn = _.first(arr) + _.last(arr);
// // console.log(resUn);

// let { first, last } = require('underscore');
// let arr = [11, 2, 3, 4, 55]
// let resUn = first(arr) + last(arr);
// console.log(resUn);

// let lo = require('lodash')
// let testArr = [1, 2, 2, 3, 4, 5, 6, 2]
// let resLodash = lo.sortedIndexOf(testArr, 2)
// console.log(resLodash)

/*--------------------------------------------------ES--------------------------------------------------*/

// import { square, cube } from './math.js';

// let res = square(2) + cube(3);
// console.log(res);

import { square, cube, avg, digitsSum } from './math.js';
let res = square(3) + cube(3)
console.log(res)

// import test from './test.js'
// console.log(test())


import array from './fye.js'
function sumAr(arr) {
    let sum = 0;
    for (let i of arr) {
        sum = sum + i;
    }
    return sum;
}
console.log(`Сумма всех чисел массива [${array}] равна ${sumAr(array)}`)




import func from './test.js'
let data = 'abcde'; // эти данные хотим передать
let test = func(data)
console.log(test)


import _ from 'underscore';

let arr = [1, 2, 3, 4, 5]
let ress = _.first(arr) + _.last(arr);
console.log(ress);