const manager = (function () {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'coke': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'omelet': { protein: 5, fat: 1, flavour: 1 },
        'cheverme': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10,   },
    }

    const prepareRecipe = (recipe, neededQuantity) => {
        let neededIngs = Object.entries(recipes[recipe]);

        for (let [ingrdient, quantity] of neededIngs) {
            let store = ingredients[ingrdient] * neededQuantity;
            if (quantity > store) {
                return `Error: not enough ${ingrdient} in stock`;
            }
        }

        for (let [ingrdient, quantity] of neededIngs) {
            ingredients[ingrdient] -= neededQuantity * quantity;
        }

        return 'Success';
    }

    return function (input) {
        let parts = input.split(' ').filter(x => x !== '');
        let command = parts[0];

        if (command === 'restock') {
            let microElement = parts[1];
            let quantity = Number(parts[2]);
            ingredients[microElement] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            let recipe = parts[1];
            let quantity = Number(parts[2]);
            return prepareRecipe(recipe, quantity);
        } else if (command === 'report') {
            return Object.entries(ingredients).map(x => `${x[0]}=${x[1]}`).join(' ');
        }
    }
})();

console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));