module.exports = function (data, a) {
    function func1() {
        return 20 * a;
    }
    function func2() {
        return 10 * a;
    }
    return func1() + func2()
}


// exports.func1 = func1;
// exports.func2 = func2;