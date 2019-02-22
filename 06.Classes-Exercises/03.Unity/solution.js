class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let str = `${this.name}\n`;
        for (let rat of this.unitedRats) {
            str += `##${rat.name}\n`;
        }

        return str;
    }
}

let test = new Rat("Pesho");
console.log(test.toString());
console.log(test.getRats());

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
console.log(test.toString());
