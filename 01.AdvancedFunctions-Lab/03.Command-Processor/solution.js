function solve(array) {
    let commandProcessor = (function () {
        let result = '';

        return {
            append: (input) => result += input,
            removeStart: (n) => result = result.substring(n),
            removeEnd: (n) => result = result.substr(0, result.length - n),
            print: () => console.log(result)
        }
    })();

    for (let item of array) {
        let [command, value] = item.split(' ');
        commandProcessor[command](value);
    }
}

solve(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
solve(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);