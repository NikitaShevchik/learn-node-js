let math = require('./math');
let res = math.square(3) + math.cube(3);
console.log(res)

let common = require('./common');
// console.log(`Квадрат числа 5 = ${common.square(5)}, Куб числа 6 = ${common.cube(6)}, Средняя сумма чисел 1, 5, 7  = 
// ${common.avg([1, 5, 7])}, Сумма чисел числа 123456789999 = ${common.digitsSum(123456789999)}`)


//С помощью модуля из предыдущей задачи найдите сумму квадрата и куба числа 3.
// Импортируйте для этого только необходимые функции.

let comRes = common.square(3) + common.cube(3);
console.log(comRes)


let array = require('./arrays');
console.log(array.arrNum);
console.log(array.arrNumTwo);
function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum)
}
arraySum(array.arrNum)

// Сделайте модуль, экспортирующий одну функцию.
let oneF = require('./onefunction');
console.log(oneF.ye(5))
console.log(oneF.square(5), oneF.cube(10))
console.log(oneF.squareTwo(11), oneF.cubeTwo(11))