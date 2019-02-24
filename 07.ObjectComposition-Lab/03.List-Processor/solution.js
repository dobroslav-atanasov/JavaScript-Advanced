function solve(array) {
    let list = [];

    let commands ={
        add: (word) => list.push(word),
        remove: (word) => list = list.filter(x => x !== word),
        print: () => console.log(list.join(','))
    }

    for (let item of array) {
        let [command, word] = item.split(' ').filter(x => x !== '');
        commands[command](word);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);