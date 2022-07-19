// Оформите этот код в виде модуля CommonJS. Экспортируйте все функции, кроме вспомогательных.


function square(num) {
    return num ** 2;
}
function cube(num) {
    return num ** 3;
}
function avg(arr) {
    return sum(arr, 1) / arr.length;
}
function digitsSum(num) {
    return sum(String(num).split(''));
}

// вспомогательная функция
function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += +elem;
    }

    return res;
}

// module.exports = { square, cube, avg, digitsSum }

//С помощью модуля из предыдущей задачи найдите сумму квадрата и куба числа 3.
// Импортируйте для этого только необходимые функции.
module.exports = { square, cube }


