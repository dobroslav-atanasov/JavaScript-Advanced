function solve(obj) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let wheel = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

    return {
        model: obj.model,
        engine: engines.filter(e => e.power >= obj.power)[0],
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: [wheel, wheel, wheel, wheel]
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));