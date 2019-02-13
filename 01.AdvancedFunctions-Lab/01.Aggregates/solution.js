function solve(array) {
    console.log(`Sum = ${array.reduce((a, b) => a + b)}`);
    console.log(`Min = ${Math.min(...array)}`);
    console.log(`Max = ${Math.max(...array)}`);
    console.log(`Product = ${array.reduce((a, b) => a * b)}`);
    console.log(`Join = ${array.join('')}`);
}

solve([2, 3, 10, 5]);
solve([5, -3, 20, 7, 0.5]);