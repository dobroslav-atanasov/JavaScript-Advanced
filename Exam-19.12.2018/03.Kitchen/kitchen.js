class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let parts = product.split(' ').filter(x => x !== '');
            let name = parts[0];
            let quantity = Number(parts[1]);
            let price = Number(parts[2]);

            if (this.budget >= price) {
                if (!this.productsInStock.hasOwnProperty(name)) {
                    this.productsInStock[name] = 0;
                }

                this.productsInStock[name] += quantity;
                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                meal: meal,
                products: products,
                price: price
            };
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }

        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        let result = '';
        if (Object.keys(this.menu).length === 0) {
            result = `Our menu is not ready yet, please come later...`;
        } else {
            Object.keys(this.menu).forEach(x => result += `${x} - $ ${this.menu[x].price}\n`);
        }

        return result;
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let neededProducts = this.menu[meal].products;

            for (let product of neededProducts) {
                let parts = product.split(' ').filter(x => x != '');
                let name = parts[0];
                let quantity = Number(parts[1]);

                if (!this.productsInStock.hasOwnProperty(name)) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }

                if (Number(this.productsInStock[name]) < quantity) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            for (let item of neededProducts) {
                let parts = item.split(' ').filter(x => x !== '');
                let name = parts[0];
                let quantity = Number(parts[1]);

                this.productsInStock[name] -= quantity;
            }

            this.budget += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}