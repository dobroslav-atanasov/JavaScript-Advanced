function sortArray(array, command) {   
    let sortAscending = (a, b) => a - b;
    let sortDescending = (a, b) => b - a;

    let sortCommand = {
        'asc': sortAscending,
        'desc': sortDescending
    };

    return array.sort(sortCommand[command]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
