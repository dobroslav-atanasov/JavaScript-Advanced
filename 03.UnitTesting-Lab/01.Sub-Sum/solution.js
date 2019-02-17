function subsum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (array.length === 0) {
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    if (!array.every(Number)) {
        return NaN;
    }

    let sum = array.slice(startIndex, endIndex + 1).reduce((a, b) => a + b);
    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));
