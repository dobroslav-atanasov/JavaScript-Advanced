let array = [1, 2, 4, 5];

(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.sum = function () {
        let sum = this.reduce((a, b) => a + b);
        return sum;
    };

    Array.prototype.average = function () {
        let average = this.reduce((a, b) => a + b) / this.length;
        return average;
    }
})();



console.log(array.last());
console.log(array.skip(2));
console.log(array.take(2));
console.log(array.sum());
console.log(array.average());