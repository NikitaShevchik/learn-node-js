let math = require('./math');
let res = math.square(3) + math.cube(3);
console.log(res)

let common = require('./common');
console.log(`Квадрат числа 5 = ${common.square(5)}, Куб числа 6 = ${common.cube(6)}, Средняя сумма чисел 1, 5, 7  = 
${common.avg([1, 5, 7])}, Сумма чисел числа 123456789999 = ${common.digitsSum(123456789999)}`)