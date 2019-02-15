let solution = (function () {
    const add = ([xA, xB], [yA, yB]) => {
        return [xA + yA, xB + yB];
    }

    const multiply = ([xA, xB], s) => {
        return [xA * s, xB * s];
    }

    const length = ([xA, xB]) => {
        return Math.sqrt(xA * xA + xB * xB);
    }

    const dot = ([xA, xB], [yA, yB]) => {
        return xA * yA + xB * yB;
    }

    const cross = ([xA, xB], [yA, yB]) => {
        return xA * yB - xB * yA;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));