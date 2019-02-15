const add = (function(){
    let sum = 0;

    function sumNumber(num) {
        sum += num;
        return sumNumber;
    }

    sumNumber.toString = function (){
        return sum;
    }

    return sumNumber;
})();

console.log(add(1)(2)(6));