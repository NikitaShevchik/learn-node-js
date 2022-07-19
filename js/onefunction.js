// Сделайте модуль, экспортирующий одну функцию.
function ye(i) {
    return `Это функция YE ${i}`
}

// module.exports.ye = ye;


// Дан следующий код
// Перепишите его через сокращенный синтаксис.

function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}

// exports.square = square; // тут было module.exports, а теперь просто exports
// exports.cube = cube;


// Дан следующий код:

function squareTwo(num) {
    return num * num;
}
function cubeTwo(num) {
    return num * num * num;
}

module.exports = { squareTwo, cubeTwo, ye, square, cube }

// Исправьте ошибку, допущенную в этом коде.