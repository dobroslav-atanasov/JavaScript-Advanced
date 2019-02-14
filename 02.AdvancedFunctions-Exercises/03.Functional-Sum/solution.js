function add(number) {
    let sum = number;

    function sumNumber(secondNumber) {
        sum += secondNumber;
        return sumNumber;
    }

    sumNumber.toString = function () {
        return sum;
    }
    return sumNumber;
}

console.log(add(1)(2)(6));